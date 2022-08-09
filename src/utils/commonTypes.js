import PropTypes from "prop-types"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  children: PropTypes.node,
  groupDatas: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  chooseDates: PropTypes.arrayOf(PropTypes.string),
}