import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";
import OnlineSchool from "@/components/Home-Main/OnlineSchool";
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
