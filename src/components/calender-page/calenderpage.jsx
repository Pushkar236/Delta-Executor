// import './App.css'; // Ensure this CSS contains the global styles
import Timeline from './Timeline/Timeline.jsx';
import DescBox from "./desc-box/desc-box.jsx";
import bg from "./../../../public/bg_3.jpg";


function CalenderPage() {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
    }}>
      <DescBox />
      {/* Space between Logo-dashboard and Timeline */}
      <div style={{ marginTop: '70px' }}>
        {/* Timeline Component */}
        <Timeline />
      </div>
    </div>
  );
}

export default CalenderPage;