import "./App.css";
import CopyRight from "./Component/CopyRight/CopyRight";
import Footer from "./Component/Footer/Footer";
import Table from "./Component/FormTable/Table";
import Header from "./Component/Header/Header";
import Section from "./Component/HeaderImg/Section";
import Middle from "./Component/midSection/Middle";
import RubixeInitiative from "./Component/RubixeInitiative/RubixeInitiative";
import TopBelow from "./Component/TopBelowImg/TopBelow";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <TopBelow />
      <Middle />
      <RubixeInitiative />
      <Table />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
