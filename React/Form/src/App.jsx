import { Form } from './Components/Form';

export const App = () => {
  const data =[
    {
      _id:1,//react compon
      name:'username',//label,id,for
      placeholder:'enter your user name',
      type:'text',
    },


    {
      _id:2,//react compon
      name:'userEmail',//
      placeholder:'enter your user email',
      type:'email',
    },


    {
      _id:3,//react compon
      name:'userPassword',//lable,id,for
      placeholder:'enter your password',
      type:'password',
    },

    {
      _id:4,//react compon
      name:'userPhone',//lable,id,for
      placeholder:'enter your user phone',
      type:'tel',
    },

  ];

  const showValue = (data)=>{
    console.log(data);
};

  return (
    <>
    <Form props={{data,showValue}}/>
    </>
  );
};


















