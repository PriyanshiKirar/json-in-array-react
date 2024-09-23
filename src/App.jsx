
const App =()=>{
  let info= [
{
  name:"priya",
  status:true,
  version:24,
},
{
  name:"pinso",
  status:true,
  version:25,
},
{
  name:"priyasnhi",
  status:true,
  version:24,
},

  ];

  let x=info.map((item, index)  =>{
    return (
      <div key={index}>
  <h1>{item.name}</h1>
  <h1>{item.version}</h1>
  <h1>{item.status}</h1>
    </div>
    )
  

})
console.log(x);
return (
  <div>
    <h1>{x}</h1>
  </div>
)
}
export default App;
