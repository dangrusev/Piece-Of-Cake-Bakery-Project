import React from "react";
import { useNavigate } from "react-router-dom";
import './CustomPage.css';

function CustomPage() {
  const navigate = useNavigate();
  const sizeOptions = {
    rectangle: ["6x8", "8x10", "10x12"],
    circle: ["6 inch", "8 inch", "10 inch"],
    star: ["Small", "Medium", "Large"],
  };
  const optionImages = {
    // Shape Images //

    rectangle: "/assets/rectangle.png",
    circle: "/assets/circle.png",
    star: "/assets/star.png",

    // Layer Images //

    singleSheet: "/assets/rectangle.png",
    doubleSheet: "/assets/doublesheet.png",
    tripleSheet: "/assets/triplesheet.png",

    // Flavor Images //

    chocolate: "/assets/chocolate.jpg",
    vanilla: "/assets/vanilla.jpg",
    "red velvet": "/assets/redvelvet.png",
    lemon: "/assets/lemon.jpg",
    carrot: "/assets/carrot.jpg",

    // Frosting Color Images //

    red: "/assets/redfrosting.png",
    blue: "/assets/bluefrosting.png",
    "light blue": "/assets/lightbluefrosting.png",
    orange: "/assets/orangefrosting.png",
    green: "/assets/greenfrosting.png",
    yellow: "/assets/yellowfrosting.png",
    gold: "/assets/yellowfrosting.png",
    purple: "/assets/purplefrosting.png",
    pink: "/assets/pinkfrosting.png",
    white: "/assets/whitefrosting.png",
    brown: "/assets/brownfrosting.png",
    black: "/assets/blackfrosting.png",
    none: "/assets/nosign.png"

  };
  const prices = {
    shape: {
      rectangle: 15,
      circle: 12,
      star: 18,
    },
    size: {
      "6x8": 5,
      "8x10": 8,
      "10x12": 10,
      "6 inch": 4,
      "8 inch": 7,
      "10 inch": 9,
      Small: 6,
      Medium: 9,
      Large: 12,
    },
    layer: {
      "singleSheet": 0,
      "doubleSheet": 5,
      "tripleSheet": 10,
    },

    frostingColor1: {
        "red": 0,
        "blue": 0,
        "light blue": 0,
        "orange": 0,
        "green": 0,
        "yellow": 0,
        "gold": 0,
        "purple": 0,
        "pink": 0,
        "white": 0,
        "brown": 0,
        "black": 0,
    },

    frostingColor2: {
        "red": 2,
        "blue": 2,
        "light blue": 2,
        "orange": 2,
        "green": 2,
        "yellow": 2,
        "gold": 2,
        "purple": 2,
        "pink": 2,
        "white": 2,
        "brown": 2,
        "black": 2,
        "none": 0,
    },

    frostingColor3: {
        "red": 2,
        "blue": 2,
        "light blue": 2,
        "orange": 2,
        "green": 2,
        "yellow": 2,
        "gold": 2,
        "purple": 2,
        "pink": 2,
        "white": 2,
        "brown": 2,
        "black": 2,
        "none": 0,
    },

    userFrostingDesign: {
      "": 0,
    },

    cakeText: {
      "": 0,
    },

    cakeDecor: {
      "": 7,
    },

    userImage: {
      "": 0,
    },
  };
  const [shape, setShape] = React.useState("");
  const [size, setSize] = React.useState("");
  const [layer, setLayer] = React.useState("");
  const [flavor, setFlavor] = React.useState("");
  const [frostingColor1, setFrostingColor1] = React.useState("");
  const [frostingColor2, setFrostingColor2] = React.useState("");
  const [frostingColor3, setFrostingColor3] = React.useState("");
  const [userFrostingDesign, setUserFrostingDesign] = React.useState("");
  const [cakeText, setCakeText] = React.useState("");
  const [cakeDecor, setCakeDecor] = React.useState("");
  const [userImage, setUserImage] = React.useState(null);
  const calculatePrice = () => {
    let total = 0;
    if (shape) total += prices.shape[shape];
    if (size) total += prices.size[size];
    if (layer) total += prices.layer[layer];
    if (frostingColor1) total += prices.frostingColor1[frostingColor1];
    if (frostingColor2) total += prices.frostingColor2[frostingColor2];
    if (frostingColor3) total += prices.frostingColor3[frostingColor3];
    if (userFrostingDesign) total += prices.userFrostingDesign[""] || 0;
    if (cakeText) total += prices.cakeText[""] || 0;
    if (cakeDecor) total += prices.cakeDecor[""] || 7;
    if (userImage) total += prices.userImage[""] || 0;
    return total.toFixed(2);
  };

  return (
    <>
      <header>
        <h1>Customize Your Own Cake</h1>
        <p>Follow each step carefully to design your own cake.</p>
      </header>

      <main>
        <section id="cakeShape">
          <h2>Choose a shape for your cake.</h2>
          <label htmlFor="shape">Cake Shapes:</label>
          <select
            id="shape"
            value={shape}
            onChange={(e) => {
              setShape(e.target.value);
              setSize("");
            }}
          >
            <option value="" disabled>
              Select a shape
            </option>
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="star">Star</option>
          </select>
          {shape && (
            <div className="shapeImage">
              <img src={optionImages[shape]} alt= "Selected Shape" className="optionImage"/>
            </div>
          )}
        </section>

        <section id="cakeSize">
          <h2>Choose a size for your cake.</h2>
          <label htmlFor="size">Cake Sizes:</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            disabled={!shape}
          >
            <option value="" disabled>
              Select a size
            </option>
            {shape &&
              sizeOptions[shape].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </section>

        <section id="cakeLayer">
          <h2>Choose amount of layers for your cake.</h2>
          <label htmlFor="layer">Cake Layer Amount:</label>
          <select
            id="layer"
            value={layer}
            onChange={(e) => setLayer(e.target.value)}
          >
            <option value="" disabled>
              Select an amount of layers
            </option>
            <option value="singleSheet">Single Sheet</option>
            <option value="doubleSheet">Double Sheet</option>
            <option value="tripleSheet">Triple Sheet</option>
          </select>

          {layer && (
            <div className="layerImage">
              <img src={optionImages[layer]} alt= "Selected Layer" className="optionImage"/>
            </div>
          )}
        </section>

        <section id="cakeFlavor">
          <h2>Choose a flavor for your cake.</h2>
          <label htmlFor="flavor">Cake Flavors:</label>
          <select
            id="flavor"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
          >
            <option value="" disabled>
              Select a flavor
            </option>
            <option value="chocolate">Chocolate</option>
            <option value="vanilla">Vanilla</option>
            <option value="red velvet">Red Velvet</option>
            <option value="lemon">Lemon</option>
            <option value="carrot">Carrot</option>
          </select>

          {flavor && (
            <div className="flavorImage">
              <img src={optionImages[flavor]} alt= "Selected Flavor" className="optionImage"/>
            </div>
          )}
        </section>

        <section id="frostingColor1">
          <h2>Choose your primary frosting color.</h2>
          <label htmlFor="frostingColor1">Primary Frosting Color:</label>
          <select
            id="frostingColor1"
            value={frostingColor1}
            onChange={(e) => setFrostingColor1(e.target.value)}
          >
            <option value="" disabled>
              Select your primary frosting color
            </option>
            {}
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="light blue">Light Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="gold">Gold</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
          </select>
          { frostingColor1 && (
            <div className="color1Image">
              <img src={optionImages[frostingColor1]} alt= "Selected Frosting Color" className="optionImage"/>
            </div>
          )}
        </section>

        <section id="frostingColor2">
          <h2>Choose your secondary frosting color.</h2>
          <label htmlFor="frostingColor2">Secondary Frosting Color:</label>
          <select
            id="frostingColor2"
            value={frostingColor2}
            onChange={(e) => setFrostingColor2(e.target.value)}
          >
            <option value="" disabled>
              Select your secondary frosting color
            </option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="light blue">Light Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="gold">Gold</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="none">None</option>
          </select>
          { frostingColor2 && (
            <div className="color2Image">
              <img src={optionImages[frostingColor2]} alt= "Selected Frosting Color" className="optionImage"/>
            </div>
          )}
        </section>

        <section id="frostingColor3">
          <h2>Choose your tertiary frosting color.</h2>
          <label htmlFor="frostingColor3">Tertiary Frosting Color:</label>
          <select
            id="frostingColor3"
            value={frostingColor3}
            onChange={(e) => setFrostingColor3(e.target.value)}
          >
            <option value="" disabled>
              Select your tertiary frosting color
            </option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="light blue">Light Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="gold">Gold</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="none">None</option>
          </select>
          { frostingColor3 && (
            <div className="color3Image">
              <img src={optionImages[frostingColor3]} alt= "Selected Frosting Color" className="optionImage"/>
            </div>
          )}
        </section>

        <section id="userFrostingDesign">
        <h2>Type in how you would like for us to design your cake's frosting.</h2>
        <label htmlFor="userFrostingDesign"> Input instructions for frosting design:</label>
            <textarea 
		          id="userFrostingDesign" 
		          name="userFrostingDesign" 
              rows={5}
		          className="textbox" 
		          placeholder="E.g., I would like a Drop Flower design along the top edges with my primary frosting color. I would like a Open Star design along the bottom edges with my secondary color. I would like the frosting in between the cake layers to be the tertiary color." 
		          required
              onChange={(e) => setUserFrostingDesign(e.target.value)}/>
        </section>

        <section id="cakeText">
        <h2>Type in any text you would like for us to put on your cake.</h2>
        <label htmlFor="cakeText">Input any text you would like for us to put on cake:</label>
            <textarea 
		        id="cakeText" 
		        name="cakeText" 
		        rows={2} 
		        className="textbox" 
		        placeholder="E.g., Put 'Happy Birthday Mom!' on the cake."
            onChange={(e) => setCakeText(e.target.value)}/>
        </section>

        <section id="cakeDecor">
        <h2>Type in any additional decorations you would like for us to put on your cake.</h2>
        <label htmlFor="cakeDecor">Input any additional decorations you would like for us to put on cake:</label>
            <textarea 
		        id="cakeDecor" 
		        name="cakeDecor" 
		        rows={2} 
		        className="textbox" 
		        placeholder="E.g., 'Put a decorative graduation hat on the top of the cake.'"
            onChange={(e) => setCakeDecor(e.target.value)}/>
        </section>

        <section id="userImage">
        <h2>Have a picture of a design you would like for us to implement onto your cake?</h2>
        <label htmlFor="userImage">Upload an image here:</label>
            	<input 
			        type="file" 
			        id="userImage" 
			        name="userImage" 
			        accept="image/png, image/jpeg"
              onChange={(e) => setUserImage(e.target.files[0])}/>
        </section>

      
        <section id="pricingSummary">
          <h2>Total Price:</h2>
          <p id="price">${calculatePrice()}</p>
        </section>

        <section id="paymentPage">
          <h2>Next Step</h2>
          <button onClick={() => { 
            if (!shape || !size || !layer || !flavor || !frostingColor1 || !frostingColor2 || !frostingColor3 ) {
            alert("Please select an option in each field to continue!");
            return; 
          }
            navigate("/PaymentPage", {
              state: {totalPrice: parseFloat(calculatePrice()) * 100,
                orderDetails: {shape, size, layer, flavor, frostingColor1, frostingColor2, frostingColor3, userFrostingDesign, cakeText, cakeDecor}
              
              }
            });
          }}>
            Continue to Payment Method
          </button>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
      </footer>
    </>
  );
}

export default CustomPage;
