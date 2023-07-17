"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ModalModule = _interopRequireDefault(require("./Modal.module.css"));
var Modal = function Modal(_ref) {
  var modalBackgroundColor = _ref.modalBackgroundColor,
    modalTextColor = _ref.modalTextColor,
    modalMinWidth = _ref.modalMinWidth,
    modalMaxWidth = _ref.modalMaxWidth,
    closeButton = _ref.closeButton,
    children = _ref.children;
  var _useState = (0, _react.useState)(modalBackgroundColor || "#1289c9"),
    _useState2 = (0, _slicedToArray2.default)(_useState, 1),
    modalBackgroundColorData = _useState2[0];
  var _useState3 = (0, _react.useState)(closeButton || true),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
    closeButtonData = _useState4[0];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    isModalVisible = _useState6[0],
    setIsModalVisible = _useState6[1];
  var _useState7 = (0, _react.useState)(children || "Succes!"),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 1),
    childrenData = _useState8[0];
  var _useState9 = (0, _react.useState)(modalMinWidth || ""),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 1),
    modalMinWidthData = _useState10[0];
  var _useState11 = (0, _react.useState)(modalMaxWidth || "600px"),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 1),
    modalMaxWidthData = _useState12[0];
  var _useState13 = (0, _react.useState)(modalTextColor || "#fff"),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 1),
    modalTextColorData = _useState14[0];
  var closeModal = function closeModal() {
    setIsModalVisible(false);
  };
  var modalStyle = {
    backgroundColor: modalBackgroundColorData,
    minWidth: modalMinWidthData,
    maxWidth: modalMaxWidthData
  };
  var childrenStyle = {
    color: modalTextColorData
  };
  var closeButtonStyle = {
    color: "white",
    backgroundColor: modalBackgroundColorData
  };
  var containerCloseStyle = {
    backgroundColor: modalBackgroundColorData
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isModalVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.containerModal,
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.modal,
    style: modalStyle
  }, closeButtonData && /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.containerClose,
    style: containerCloseStyle
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: closeModal,
    style: closeButtonStyle,
    class: _ModalModule.default.closeButton
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xD7"))), childrenData && /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.containerChildren,
    style: childrenStyle
  }, childrenData))));
};
var _default = Modal;
exports.default = _default;