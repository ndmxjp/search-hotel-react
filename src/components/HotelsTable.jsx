import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh
          label="値段"
          sortKey="price"
        />
        <HotelsClickableTh
          label="レビュー"
          sortKey="reviewAverage"
        />
        <HotelsClickableTh
          label="レビュー件数"
          sortKey="reviewCount"
        />
        <HotelsClickableTh
          label="距離"
          sortKey="distance"
        />
      </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

export default connect(state => ({
  hotels: sortedHotels(state.hotels, state.sortKey),
}))(HotelsTable);
