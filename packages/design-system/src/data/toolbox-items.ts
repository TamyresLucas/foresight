import {
  BlockIcon,
  PageBreakIcon,
  CheckboxIcon,
  RadioButtonIcon,
  TextAnswerIcon,
  ChoiceGridIcon,
  CardSortIcon,
  CustomQuestionIcon,
  DateTimeAnswerIcon,
  DescriptionIcon,
  DragAndDropIcon,
  DrillDownIcon,
  DropdownListIcon,
  EmailAddressIcon,
  FileUploadIcon,
  HybridGridIcon,
  ImageSelectorIcon,
  NumericAnswerIcon,
  NumericRankingIcon,
  RespondentEmailIcon,
  RespondentLanguageIcon,
  RespondentMetadataIcon,
  RespondentPhoneIcon,
  RespondentTimezoneIcon,
  RunningTotalIcon,
  SecuredTempVarIcon,
  SignatureIcon,
  SliderIcon,
  StarRatingIcon,
  TextHighlighterIcon,
  TimerIcon,
  HeatmapIcon,
  CarouselIcon,
  NpsIcon,
  DropdownIcon,
} from "../components/ui/toolbox-icons";

// Define the ToolboxItem type
export interface ToolboxItemData {
  name: string;
  icon: React.ElementType;
}

// Define the icon mapping
const iconMap: Record<string, React.ElementType> = {
  "Auto Complete Dropdown": DropdownIcon,
  Block: BlockIcon,
  "Card Sort": CardSortIcon,
  Carousel: CarouselIcon,
  "Cascading Dropdown": DropdownIcon,
  "Check Box": CheckboxIcon,
  "Choice Grid": ChoiceGridIcon,
  "Click Map": HeatmapIcon,
  "Comment Box": CustomQuestionIcon,
  "Custom Grid": HybridGridIcon,
  "Custom Scripting": CustomQuestionIcon,
  "Date & Time": DateTimeAnswerIcon,
  Description: DescriptionIcon,
  "Drag and Drop Ranking": DragAndDropIcon,
  Dropdown: DropdownListIcon,
  "Email Address": EmailAddressIcon,
  "Email Collector": RespondentEmailIcon,
  "File Upload": FileUploadIcon,
  "Hot Spot": HeatmapIcon,
  "Image Grid": ImageSelectorIcon,
  "Image Select": ImageSelectorIcon,
  "Language Preference": RespondentLanguageIcon,
  "Lookup Table": DrillDownIcon,
  "Metadata Collector": RespondentMetadataIcon,
  NPS: NpsIcon,
  "Numeric Input": NumericAnswerIcon,
  "Numeric Ranking": NumericRankingIcon,
  "Page Break": PageBreakIcon,
  "Phone Number": RespondentPhoneIcon,
  "Radio Button": RadioButtonIcon,
  "Running Total": RunningTotalIcon,
  "Secured Temporary Variable": SecuredTempVarIcon,
  Signature: SignatureIcon,
  Slider: SliderIcon,
  "Star Rating": StarRatingIcon,
  "Text Highlighter": TextHighlighterIcon,
  "Text Input": TextAnswerIcon,
  "Time Zone": RespondentTimezoneIcon,
  Timer: TimerIcon,
};

// Define the question groups
export const questionGroups: Record<string, string[]> = {
  "Advanced & Interactive": [
    "Card Sort",
    "Carousel",
    "Click Map",
    "Comment Box",
    "Custom Scripting",
    "File Upload",
    "Hot Spot",
    "Signature",
    "Text Highlighter",
    "Timer",
  ],
  Grid: ["Choice Grid", "Custom Grid", "Image Grid", "Running Total"],
  Input: ["Date & Time", "Email Address", "Numeric Input", "Text Input"],
  "Multiple choices": [
    "Auto Complete Dropdown",
    "Cascading Dropdown",
    "Check Box",
    "Dropdown",
    "Image Select",
    "Radio Button",
  ],
  "Rating & Scoring": [
    "Drag and Drop Ranking",
    "NPS",
    "Numeric Ranking",
    "Slider",
    "Star Rating",
  ],
  Structural: ["Block", "Description", "Lookup Table", "Page Break"],
  "System Variable": [
    "Email Collector",
    "Language Preference",
    "Metadata Collector",
    "Phone Number",
    "Secured Temporary Variable",
    "Time Zone",
  ],
};

// Create the toolbox items array
export const toolboxItems: ToolboxItemData[] = Object.keys(iconMap).map(
  (name) => ({
    name,
    icon: iconMap[name],
  }),
);

// Export the icon mapping
export { iconMap };
