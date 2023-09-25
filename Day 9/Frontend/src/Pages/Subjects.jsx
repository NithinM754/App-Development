import React from 'react'
import Layout from '../Components/Layout'
import '../Assets/css/Subject.css'

function Subjects() {
  const data={
    menu: [
      {
          img:"https://res.cloudinary.com/dmtzvxa53/image/upload/v1695619321/istockphoto-680412874-612x612_tf0kee.jpg",
          name:"Physics",
          id:"1",
      },
      {
          img:"https://res.cloudinary.com/dmtzvxa53/image/upload/v1695619377/desktop-wallpaper-computer-science-engineering-network-engineer-thumbnail_jwxjxl.jpg",
          name:"Computer Science",
          id:"1",
      },
      {
          img:"https://res.cloudinary.com/dmtzvxa53/image/upload/v1695619322/desktop-wallpaper-english-english-background-on-bat-english-word_wenb7h.jpg",
          name:"English",
          id:"1",
      },
      {
          img:"https://res.cloudinary.com/dmtzvxa53/image/upload/v1695619321/technology-physics-and-chemistry-chemistry-hd-wallpaper-preview_rkp2fj.jpg",
          name:"Chemistry",
          id:"1",
      },
      
      {
          img:"https://res.cloudinary.com/dmtzvxa53/image/upload/v1695619517/ORFF360_qbb41e.jpg",
          name:"Maths",
          id:"1",
      },
      {
          img:"",
          name:"Maths",
          id:"1",
      },
      
    ]
  }
  const {menu,onAdd} = data;
  console.log(menu);
return (
  
  <div class="food-area">
    <div class="container">
      <div class="title">
        <h4><i style={{fontSize:'1.2em'}} class="fa-solid fa-utensils"></i> &nbsp;SUBJECTS </h4>
        <div class="foods">
          {menu.map((menu, id) => {
            
            return (
              <div key={id} class="singlefood">
                <div class="food-img">
                  <img
                    src={menu.img}
                    alt="Subject"
                    height="230px"
                    width="350px"
                  />
                  <h4>{menu.name}</h4>
                </div>

                <ul class="food-list">
                  <li>{menu.name}</li>
                  <li>{menu.price}</li>
                </ul>
                <div className="but">
                </div>
                {/* <div className="pos">
                <Link className='logo'>Add to Package</Link>
                </div> */}
              </div>
              
            );
          })}
        </div>
      </div>
    </div>
  </div>
);
}

export default Subjects;