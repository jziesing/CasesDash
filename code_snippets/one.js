//adding something for change

const products = [
  {
      id: 1,
      title: "Product1",
      description: 120
  },{
      id: 2,
      title: "Product2",
      description: 80
  },{
      id: 3,
      title: "Product3",
      description: 207
  },{
      id: 4,
      title: "Product4",
      description: 100
  },{
      id: 5,
      title: "Product5",
      description: 150
  },{
      id: 7,
      title: "Product1",
      description: 160
  },
  {
      id: 8,
      title: "Product1",
      description: 160
  },
  {
      id: 9,
      title: "Product1",
      description: 160
  },
  {
      id: 10,
      title: "Product1",
      description: 160
  },
  {
      id: 11,
      title: "Product1",
      description: 160
  },
  {
      id: 12,
      title: "Product777",
      description: 160
  },
  {
      id: 13,
      title: "Product1",
      description: 160
  },
  {
      id: 14,
      title: "Product1",
      description: 160
  }
];

{products.map(function(item,index) {
 return <tr key={item.id}><td><Link to="add">{item.title}</Link></td><td>{item.description}</td></tr>
})}
