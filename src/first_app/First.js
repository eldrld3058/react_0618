function First(){
    const name = "React";

    const ulstyle = {
      color:"orange",
      border : "1px solid blue"
    }
    return (

       
        <div className="container"
        style={{color:"red",background: 'skyblue'}}
        >
           <div> First {name}</div>
        <ul style={ulstyle}>
            <li>apple</li>
            <li>fineapple</li>
            <li>banana</li>
        </ul>
       </div>
       )
   
   }
   
   export default First;
   
// 컴포넌트 앞글자는 대문자
//[UI 처리]
/*
hook : 함수(method),특정용도를 
*/