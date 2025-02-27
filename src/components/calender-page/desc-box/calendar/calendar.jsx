import React from "react";
import "./calendar.css";
import bg from "./../../../../../public/bg_3.jpg";
const Calendar = () => {
  return (
    <div className="calendar-container" style={{
      backgroundImage: `url(${bg})`,
    }}>
      <header>
        <div className="month">MARCH'25</div>
        
      </header>

      <table className="calendar">
        <thead>
          <tr>
            <td>M</td>
            <td>T</td>
            <td>W</td>
            <td>T</td>
            <td>F</td>
            <td>S</td>
            <td>S</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="prev-month">24</td>
            <td className="prev-month">25</td>
            <td className="prev-month">26</td>
            <td className="prev-month"d>27</td>
            <td className="prev-month">28</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td className="current-day">6</td>
            <td className="current-day">7</td>
            <td className="current-day">8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
          </tr>
          <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
};

export default Calendar;
