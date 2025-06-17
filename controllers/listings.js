// const Listing=require("../models/listing");

// module.exports.index = async (req,res)=>{
//     const allListings= await Listing.find({});
//     res.render("listings/index.ejs",{allListings});
// };

// module.exports.renderNewForm = (req,res) => {
//     res.render("listings/new.ejs");
// };

// module.exports.showListing = async (req,res) => {
//     let {id} =  req.params;
//     const listing = await Listing.findById(id).populate({path: "reviews", populate:{path:"author"},}).populate("owner");
//     if(!listing){
//         req.flash("error","Does not exists !!");
//         return res.redirect("/listings");
//     }
//     res.render("listings/show.ejs",{listing});
// };

// module.exports.createListing = async (req,res,next) => {
//     let url = req.file.path;
//     let filename = req.file.filename;
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id;
//     newListing.image = {url,filename};
//     await newListing.save();
//     req.flash("success","New Listing Created !!");
//     res.redirect("/listings");
// };

// module.exports.renderEditForm = async(req,res) => {
//     let {id}= req.params;
//     const listing= await Listing.findById(id);
//     if(!listing){
//         req.flash("error","Does not exists !!");
//         return res.redirect("/listings");
//     }
//     let originalImageUrl = listing.image.url;
//     originalImageUrl= originalImageUrl.replace("/upload", "/upload/h_300,w_250");
//     res.render("listings/edit.ejs", {listing, originalImageUrl});
// };

// module.exports.updateListing = async (req, res) => {
//     let {id} = req.params;
//     let listing = await Listing.findByIdAndUpdate (id, { ...req.body.listing });

//     if (typeof req.file !== "undefined") {
//         let url = req.file.path;
//         let filename = req.file.filename;
//         listing.image = { url, filename};
//         await listing.save();
//     }
    
//     req.flash("success", "Listing Updated!");
//     res.redirect(`/listings/${id}`);
// };

// module.exports.destroyListing = async (req,res) =>{
//     let {id}= req.params;
//     await Listing.findByIdAndDelete(id);
//     req.flash("success","Listing Deleted !!");
//     res.redirect("/listings");
// };


const axios = require("axios");
const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing does not exist!!");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    // 1. Geocode location string -> lat/lng via Nominatim
    const geoData = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
            q: req.body.listing.location,
            format: "json",
            limit: 1
        },
        headers: {
            'User-Agent': 'wanderlust-app (you@example.com)' // Required by Nominatim policy
        }
    });

    const coordinates = geoData.data[0]
        ? [parseFloat(geoData.data[0].lon), parseFloat(geoData.data[0].lat)]
        : [0, 0]; // fallback if location fails

    // 2. Create listing object
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    // 3. Set coordinates as GeoJSON
    newListing.geometry = {
        type: "Point",
        coordinates: coordinates
    };


    // 4. Save image info if present
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    // 5. Save to DB
    await newListing.save();
    req.flash("success", "New Listing Created!!");
    res.redirect(`/listings/${newListing._id}`);
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing does not exist!!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");

    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Update image if new one uploaded
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    // Optional: re-geocode if location was changed
    if (req.body.listing.location) {
        const geoData = await axios.get("https://nominatim.openstreetmap.org/search", {
            params: {
                q: req.body.listing.location,
                format: "json",
                limit: 1
            },
            headers: {
                'User-Agent': 'wanderlust-app (you@example.com)'
            }
        });

        const coordinates = geoData.data[0]
            ? [parseFloat(geoData.data[0].lon), parseFloat(geoData.data[0].lat)]
            : [0, 0];

        listing.geometry = {
            type: "Point",
            coordinates: coordinates
        };
    }

    await listing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!!");
    res.redirect("/listings");
};

