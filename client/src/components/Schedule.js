import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Schedule.css';

const Schedule = () => {
  const navigate = useNavigate();

  return (
    
    <div className="schedule-container0">
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
      <div className='schedule-container'>
      
      
      <h2>Schedule</h2>
      
      <h3>Individual Events:</h3>
      <ul>
        <li>50m Butterfly</li>
        <li>100m Butterfly</li>
        <li>200m Butterfly</li>
        <li>50m Freestyle</li>
        <li>100m Freestyle</li>
        <li>200m Freestyle</li>
        <li>400m Freestyle</li>
        <li>50m Backstroke</li>
        <li>100m Backstroke</li>
        <li>200m Backstroke</li>
        <li>50m Breaststroke</li>
        <li>100m Breaststroke</li>
        <li>200m Breaststroke</li>
        <li>200m IM</li>
      </ul>

      <h3>Relay Events:</h3>
      <ul>
        <li>4x50m Free Relay</li>
        <li>4x50m Medley Relay</li>
        <li>4x50m Mixed Free Relay</li>
        <li>4x50m Mixed Medley Relay</li>
      </ul>

      <h3>Day 01 start – 9.00am</h3>
      <table>
        <thead>
          <tr>
            <th>Event No</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>400m Freestyle (W)</td>
          </tr>
          <tr>
            <td>02</td>
            <td>400m Freestyle (M)</td>
          </tr>
          <tr>
            <td>03</td>
            <td>50m Butterfly (W)</td>
          </tr>
          <tr>
            <td>04</td>
            <td>50m Butterfly (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>15 mins Break</span></td>
          </tr>
          <tr>
            <td>05</td>
            <td>50m Breaststroke (W)</td>
          </tr>
          <tr>
            <td>06</td>
            <td>50m Breaststroke (M)</td>
          </tr>
          <tr>
            <td>07</td>
            <td>100m Freestyle (W)</td>
          </tr>
          <tr>
            <td>08</td>
            <td>100m Freestyle (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>15 mins Break</span></td>
          </tr>
          <tr>
            <td>09</td>
            <td>100m Backstroke (W)</td>
          </tr>
          <tr>
            <td>10</td>
            <td>100m Backstroke (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>Lunch Break – 1h</span></td>
          </tr>
          <tr>
            <td>11</td>
            <td>200m Individual Medley (W)</td>
          </tr>
        </tbody>
      </table>

      <h3>Day 02 start – 9.30am</h3>
      <table>
        <thead>
          <tr>
            <th>Event No</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18</td>
            <td>200m Freestyle (W)</td>
          </tr>
          <tr>
            <td>19</td>
            <td>200m Freestyle (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>10 mins break</span></td>
          </tr>
          <tr>
            <td>20</td>
            <td>200m Backstroke (W)</td>
          </tr>
          <tr>
            <td>21</td>
            <td>200m Backstroke (M)</td>
          </tr>
          <tr>
            <td>22</td>
            <td>100m Butterfly (W)</td>
          </tr>
          <tr>
            <td>23</td>
            <td>100m Butterfly (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>10 mins Break</span></td>
          </tr>
          <tr>
            <td>24</td>
            <td>200m Breaststroke (W)</td>
          </tr>
          <tr>
            <td>25</td>
            <td>200m Breaststroke (M)</td>
          </tr>
          <tr>
            <td>26</td>
            <td>50m Freestyle (W)</td>
          </tr>
          <tr>
            <td>27</td>
            <td>50m Freestyle (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>15 mins Break</span></td>
          </tr>
          <tr>
            <td>12</td>
            <td>200m Individual Medley (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>10 mins Break</span></td>
          </tr>
          <tr>
            <td>13</td>
            <td>100m Breaststroke (W)</td>
          </tr>
          <tr>
            <td>14</td>
            <td>100m Breaststroke (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>15 mins Break</span></td>
          </tr>
          <tr>
            <td>15</td>
            <td>4x50m Mixed Medley Relay</td>
          </tr>
          <tr>
            <td colSpan="2"><span>15 mins Break</span></td>
          </tr>
          <tr>
            <td>16</td>
            <td>4x50m Medley Relay (W)</td>
          </tr>
          <tr>
            <td>17</td>
            <td>4x50m Medley Relay (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>Lunch Break 1h 30 mins</span></td>
          </tr>
          <tr>
            <td>28</td>
            <td>200m Butterfly (W)</td>
          </tr>
          <tr>
            <td>29</td>
            <td>200m Butterfly (M)</td>
          </tr>
          <tr>
            <td>30</td>
            <td>50m Backstroke (W)</td>
          </tr>
          <tr>
            <td>31</td>
            <td>50m Backstroke (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>20 mins break</span></td>
          </tr>
          <tr>
            <td>32</td>
            <td>4x50m Freestyle Relay (W)</td>
          </tr>
          <tr>
            <td>33</td>
            <td>4x50m Freestyle Relay (M)</td>
          </tr>
          <tr>
            <td colSpan="2"><span>15 mins Break</span></td>
          </tr>
          <tr>
            <td>34</td>
            <td>4x50m Mixed Freestyle Relay</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Schedule;
