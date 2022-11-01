import { FormControl, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const UploadImage = ({ input, setInput }) => {
  
  const [ image, setImage ] = useState('');
  const [ loadingImg, setLoadingImg ] = useState(false);

  const uploadImg = async (e) => {
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'heladitos');
    setLoadingImg(true);
    console.log(data);
    const res = await fetch("https://api.cloudinary.com/v1_1/dau2psu2k/upload", { method: "POST", body: data })
    console.log(res);
    const file = await res.json();
    setImage(file.secure_url);
    setInput({
        ...input,
        image: file.secure_url
    });
    console.log(file.secure_url);
    setLoadingImg(false);
    console.log(input);
  }
  
  return (
    <div>
        <FormControl>
            <Input
                type="file"
                //value={image}
                name="image"
                onChange={uploadImg}
                placeholder="Sube tu imagen aquí..." 
                focusBorderColor="#5CE1E6"
                rounded="md"
                className="error"
                pt="0.25rem"
                />
            { loadingImg ? (<Text>Cargando imagen</Text>) : (<Image src={image} />) }
        </FormControl>
    </div>
  );
};

export default UploadImage;
