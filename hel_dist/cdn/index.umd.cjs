(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-fan"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| 对应 package.json / appGroupName（rollup 会把本文件当普通 JS 读取，
	| 所以这里只写可被 Rollup 直接解析的语法）
	|
	|--------------------------------------------------------------------------
	*/

	const LIB_NAME$1 = 'comps-fan';

	// The host preloads the implementation before evaluating this proxy.

	const dtlib = helLibProxy.exposeLib(LIB_NAME$1);
	const LIB_NAME = dtlib.LIB_NAME;
	const FaAlert = dtlib.FaAlert;
	const FaAvatar = dtlib.FaAvatar;
	const FaBadge = dtlib.FaBadge;
	const FaButton = dtlib.FaButton;
	const FaButtonGroup = dtlib.FaButtonGroup;
	const FaCard = dtlib.FaCard;
	const FaCheckbox = dtlib.FaCheckbox;
	const FaCheckboxGroup = dtlib.FaCheckboxGroup;
	const FaCollapsible = dtlib.FaCollapsible;
	const FaContextMenu = dtlib.FaContextMenu;
	const FaDescriptions = dtlib.FaDescriptions;
	const FaDivider = dtlib.FaDivider;
	const FaDrawer = dtlib.FaDrawer;
	const useFaDrawer = dtlib.useFaDrawer;
	const FaDropdown = dtlib.FaDropdown;
	const FaFileUpload = dtlib.FaFileUpload;
	const FaFixedBar = dtlib.FaFixedBar;
	const FaForm = dtlib.FaForm;
	const FaFormItem = dtlib.FaFormItem;
	const FaHoverCard = dtlib.FaHoverCard;
	const FaIcon = dtlib.FaIcon;
	const FaImagePreview = dtlib.FaImagePreview;
	const useFaImagePreview = dtlib.useFaImagePreview;
	const FaImageUpload = dtlib.FaImageUpload;
	const FaInput = dtlib.FaInput;
	const FaInputOTP = dtlib.FaInputOTP;
	const FaKbd = dtlib.FaKbd;
	const FaKbdGroup = dtlib.FaKbdGroup;
	const FaLabel = dtlib.FaLabel;
	const FaModal = dtlib.FaModal;
	const useFaModal = dtlib.useFaModal;
	const FaNumberField = dtlib.FaNumberField;
	const FaPageHeader = dtlib.FaPageHeader;
	const FaPageMain = dtlib.FaPageMain;
	const FaPagination = dtlib.FaPagination;
	const FaPasswordStrength = dtlib.FaPasswordStrength;
	const FaPopover = dtlib.FaPopover;
	const FaProgress = dtlib.FaProgress;
	const FaRadioGroup = dtlib.FaRadioGroup;
	const FaScrollArea = dtlib.FaScrollArea;
	const FaSearchBar = dtlib.FaSearchBar;
	const FaSelect = dtlib.FaSelect;
	const FaSlider = dtlib.FaSlider;
	const FaSwitch = dtlib.FaSwitch;
	const FaTable = dtlib.FaTable;
	const FaTabs = dtlib.FaTabs;
	const FaTag = dtlib.FaTag;
	const FaTextarea = dtlib.FaTextarea;
	const FaToast = dtlib.FaToast;
	const useFaToast = dtlib.useFaToast;
	const FaTooltip = dtlib.FaTooltip;
	const FaTrend = dtlib.FaTrend;
	const examples = dtlib.examples;

	exports.FaAlert = FaAlert;
	exports.FaAvatar = FaAvatar;
	exports.FaBadge = FaBadge;
	exports.FaButton = FaButton;
	exports.FaButtonGroup = FaButtonGroup;
	exports.FaCard = FaCard;
	exports.FaCheckbox = FaCheckbox;
	exports.FaCheckboxGroup = FaCheckboxGroup;
	exports.FaCollapsible = FaCollapsible;
	exports.FaContextMenu = FaContextMenu;
	exports.FaDescriptions = FaDescriptions;
	exports.FaDivider = FaDivider;
	exports.FaDrawer = FaDrawer;
	exports.FaDropdown = FaDropdown;
	exports.FaFileUpload = FaFileUpload;
	exports.FaFixedBar = FaFixedBar;
	exports.FaForm = FaForm;
	exports.FaFormItem = FaFormItem;
	exports.FaHoverCard = FaHoverCard;
	exports.FaIcon = FaIcon;
	exports.FaImagePreview = FaImagePreview;
	exports.FaImageUpload = FaImageUpload;
	exports.FaInput = FaInput;
	exports.FaInputOTP = FaInputOTP;
	exports.FaKbd = FaKbd;
	exports.FaKbdGroup = FaKbdGroup;
	exports.FaLabel = FaLabel;
	exports.FaModal = FaModal;
	exports.FaNumberField = FaNumberField;
	exports.FaPageHeader = FaPageHeader;
	exports.FaPageMain = FaPageMain;
	exports.FaPagination = FaPagination;
	exports.FaPasswordStrength = FaPasswordStrength;
	exports.FaPopover = FaPopover;
	exports.FaProgress = FaProgress;
	exports.FaRadioGroup = FaRadioGroup;
	exports.FaScrollArea = FaScrollArea;
	exports.FaSearchBar = FaSearchBar;
	exports.FaSelect = FaSelect;
	exports.FaSlider = FaSlider;
	exports.FaSwitch = FaSwitch;
	exports.FaTable = FaTable;
	exports.FaTabs = FaTabs;
	exports.FaTag = FaTag;
	exports.FaTextarea = FaTextarea;
	exports.FaToast = FaToast;
	exports.FaTooltip = FaTooltip;
	exports.FaTrend = FaTrend;
	exports.LIB_NAME = LIB_NAME;
	exports.default = dtlib;
	exports.dtlib = dtlib;
	exports.examples = examples;
	exports.useFaDrawer = useFaDrawer;
	exports.useFaImagePreview = useFaImagePreview;
	exports.useFaModal = useFaModal;
	exports.useFaToast = useFaToast;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
