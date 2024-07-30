import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Heading";
import Card from "./Card";

function App(){
  const Cards=[
    {
      plan: "FREE",
      price: 0,
      features: [
        {
          name:"Single User",
          enable:true
        },
        {
          name: "50 GB storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name:"Unlimited private Projects",
          enable : false
        },
        {
        name: "Dedicated Phone Support",
        enable : false
        },
        {
        name: "Free Subdomain",
        enable : false
        },
        {
        name: "Monthly Status Report",
        enable : false
        },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        {
          name:"5 Users",
          enable:true
        },
        {
          name: "50 GB storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name:"Unlimited private Projects",
          enable : true  
        },
        {
        name: "Dedicated Phone Support",
        enable : true
        },
        {
        name: "Free Subdomain",
        enable : true
        },
        {
        name: "Monthly Status Report",
        enable : false
        },
      ],
    },
    {
      plan: "PRO",
      price: 49,
      features: [
        {
          name:"Unlimited Users",
          enable:true
        },
        {
          name: "500 GB storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name:"Unlimited private Projects",
          enable : true 
        },
        {
        name: "Dedicated Phone Support",
        enable : true
        },
        {
        name: "Free Subdomain",
        enable : true
        },
        {
        name: "Monthly Status Report",
        enable : true
        },
      ],
    },
  ];
  return (
    <div className="container">
      <Header/>
      <main>
      <div class="p-3 mb-2 bg-primary text-white"></div>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {Cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })} 
        </div>
        <div class="p-3 mb-2 bg-primary text-white"></div>
      </main>
    </div>
  );
}
export default App;