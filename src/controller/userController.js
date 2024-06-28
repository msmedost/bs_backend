import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Form } from "../model/userModels.js";

// const submitUser = async (req, res) => {


//   let photoLocalPath;

//   if (
//     req.files &&
//     Array.isArray(req.files.yourphoto) &&
//     req.files.yourphoto.length > 0
//   ) {
//     photoLocalPath = req.files.yourphoto[0].path;
//   }

//   const yourphoto = await uploadPhotos(photoLocalPath);


//   const {
//     name,
//     gender,
//     whatsappno,
//     alternateno,
//     email,
//     dob,
//     doma,
//     blood,
//     interesrarea,
//     businessname,
//     businesscategory,
//     nob,
//     bs,
//     ba,
//     pincode,
//     city,
//     wlink,
//     textarea,
//     yourlogo,
//   } = req.body;
//   const newForm = new Form({
//     name,
//     gender,
//     whatsappno,
//     alternateno,
//     email,
//     dob,
//     doma,
//     blood,
//     interesrarea,
//     businessname,
//     businesscategory,
//     nob,
//     bs,
//     ba,
//     pincode,
//     city,
//     wlink,
//     textarea,
//     yourphoto: yourphoto?.url || "",
//     yourlogo,
//   });


//   try {
//     await newForm.save();
//     res.status(200).send("Form submitted successfully");
//   } catch (err) {
//     console.error("Error saving form:", err);
//     res.status(500).send("Internal server error");
//   }
// };

// const submitUser = async (req, res) => {



const submitUser = async (req, res) => {
  

  let userPhotoLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.userPhoto) &&
    req.files.userPhoto.length > 0
  ) {
    userPhotoLocalPath = req.files.userPhoto[0].path;
  }
  
  const userPhoto = await uploadOnCloudinary(userPhotoLocalPath);

  const user = await Form.create({
    ...req.body,
    userPhoto: userPhoto?.url || "https://img.icons8.com/?size=100&id=23265&format=png&color=000000",
    status: "pending"
  });

  return res
    .status(201)
    .json("Registration Successful");
};



const getUser = async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (err) {
        console.error('Error fetching forms:', err);
        res.status(500).send('Internal server error');
    }
};

const updateStatus = async (req, res) => {
  const { formId } = req.params;
  const { status } = req.body;

  try {
      const updatedForm = await Form.findByIdAndUpdate(
          formId,
          { status },
          { new: true }
      );

      if (!updatedForm) {
          return res.status(404).send("Form not found");
      }

      res.json(updatedForm);
  } catch (err) {
      console.error("Error updating form status:", err);
      res.status(500).send("Internal server error");
  }
};



export {submitUser, getUser, updateStatus}




