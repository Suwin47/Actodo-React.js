import { useLocation } from "react-router-dom";
import Header from '../components/Header'
import Card from '../components/Card'
import Todocontainer from '../components/Todocontainer'

function Landing() {
const location = useLocation();
return (
    <>
      <div className="bg-black p-10">
        <div className="bg-[#efefef] p-10 border rounded-md">
          {/*Header*/}
          <Header data={{ username: location.state?.username }} />
          {/*Cards*/}
          <div className="flex justify-between gap-10 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Kochi"} />
            <Card bgcolor={"#FD6663"} title={"June"} subtitle={"07:28:59"} />
            <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
          </div>
          {/*Todo Container*/}
          <Todocontainer />
        </div>
      </div>
    </>
  )
}

export default Landing;