import { exposeLib } from 'hel-lib-proxy';

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

const dtlib = exposeLib(LIB_NAME$1);
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

export { FaAlert, FaAvatar, FaBadge, FaButton, FaButtonGroup, FaCard, FaCheckbox, FaCheckboxGroup, FaCollapsible, FaContextMenu, FaDescriptions, FaDivider, FaDrawer, FaDropdown, FaFileUpload, FaFixedBar, FaForm, FaFormItem, FaHoverCard, FaIcon, FaImagePreview, FaImageUpload, FaInput, FaInputOTP, FaKbd, FaKbdGroup, FaLabel, FaModal, FaNumberField, FaPageHeader, FaPageMain, FaPagination, FaPasswordStrength, FaPopover, FaProgress, FaRadioGroup, FaScrollArea, FaSearchBar, FaSelect, FaSlider, FaSwitch, FaTable, FaTabs, FaTag, FaTextarea, FaToast, FaTooltip, FaTrend, LIB_NAME, dtlib as default, dtlib, examples, useFaDrawer, useFaImagePreview, useFaModal, useFaToast };
