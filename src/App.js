import Card from "./Card";
function App() {

  let data=[
    {
      plan:'FREE',
      price:"0",
      users:'single User',
      isUsers:true,
      storage:'5GB Storage',
      isStorage:true,
      publicprojcets:"unlimited public projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      PrivateProjects:"unlimited Private Projects",
      isPrivateProjects:false,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      SubDomain:"Free Subdomain",
      isSubDomain:false,
      Report:"Monthly Status Reports",
      isReport:false,
    },
    {
      plan:'FREE',
      price:"0",
      users:'5 Users',
      isUsers:true,
      storage:'50GB Storage',
      isStorage:true,
      publicprojcets:"unlimited public projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      PrivateProjects:"unlimited Private Projects",
      isPrivateProjects:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      SubDomain:"Free Subdomain",
      isSubDomain:true,
      Report:"Monthly Status Reports",
      isReport:false,
    },
    {
      plan:'FREE',
      price:"0",
      users:'Unlimited Users',
      isUsers:true,
      storage:'150GB Storage',
      isStorage:true,
      publicprojcets:"unlimited public projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      PrivateProjects:"unlimited Private Projects",
      isPrivateProjects:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      SubDomain:"Unlimited Free Subdomains",
      isSubDomain:true,
      Report:"Monthly Status Reports",
      isReport:true,
    }
    
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      <Card data={data[0]}/>
      <Card data={data[1]}/>
      <Card data={data[2]}/> 
    </div>
  </div>
</section>
  </>
   
}

export default App;
