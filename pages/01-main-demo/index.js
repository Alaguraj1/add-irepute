// import PageHead from "../Head";
// import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
// import Separator from "@/components/Common/Separator";
// import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
// import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

// import Context from "@/context/Context";
// import { Provider } from "react-redux";
// import Store from "@/redux/store";
// import FooterThree from "@/components/Footer/Footer-Three";

// const Home = () => {
//   return (
//     <>
//       <PageHead title="Home - Online Courses & Education NEXTJS14 Template" />

//       <Provider store={Store}>
//         <Context>
//           <MobileMenu />
//           <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
//           <MainDemo />
//           <Cart />

//           <Separator />
//           <FooterThree />
//         </Context>
//       </Provider>
//     </>
//   );
// };

// export default Home;


import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";
import OnlineSchool from "@/components/03-online-school/OnlineSchool";
import FooterOne from "@/components/Footer/Footer-One";

const OnlineSchoolPage = () => {
  return (
    <>
      <PageHead title="repute" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleEleven />
          {/* <Cart /> */}

          <OnlineSchool />

          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default OnlineSchoolPage;
