import { IconType } from "react-icons";

import {
  HiOutlinePhone, HiOutlineEnvelope, HiOutlineRocketLaunch,
  HiOutlineCpuChip,     // עבור CPU
  HiOutlineSquare3Stack3D, // עבור Resolution/Grid
  HiOutlineDevicePhoneMobile, // עבור Fingerprint/Touch
  HiOutlineScale,       // עבור Ruler/Size
  HiOutlineInboxStack,   // עבור Package
  HiOutlineDocumentText,  //
  HiOutlineMapPin, 
  HiOutlineComputerDesktop, // עבור monitor
  HiOutlineHandRaised,       // עבור touchpad/touch
  HiOutlineRectangleGroup,   // עבור layoutTemplate
  HiOutlineSun,              // עבור sun
  HiOutlinePhoto             // עבור image
} from "react-icons/hi2";

import { 
  LuRuler, 
  LuThermometer, 
  LuFingerprint,
  LuLayoutTemplate, 
  LuMonitor, 
  LuLayers 
} from "react-icons/lu";


export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  phone: HiOutlinePhone,      
  mail: HiOutlineEnvelope,

  ruler: LuRuler,               // סרגל למידות
  cpu: HiOutlineCpuChip,        // צ'יפ לממשקים (Interface)
  grid: HiOutlineSquare3Stack3D, // רשת לרזולוציה
  fingerprint: LuFingerprint,   // טביעת אצבע לסוג טאץ'
  thermometer: LuThermometer,   // טרמומטר לטמפרטורה
  package: HiOutlineInboxStack, // חבילה לכמויות
  fileText: HiOutlineDocumentText, // דף טקסט ל-Datasheet
  mapPin: HiOutlineMapPin,          // מיקום (עבור כתובת/מפעל)
  monitor: LuMonitor,               // מסך (עבור תצוגה/TFT)
  touchpad: HiOutlineHandRaised,    // סמל יד (עבור יכולות טאץ')
  layoutTemplate: LuLayoutTemplate, // תבנית פריסה (עבור Mechanical Outline)
  sun: HiOutlineSun,                // שמש (עבור Brightness/תאורה אחורית)
  layers: LuLayers,                 // שכבות (עבור מבנה הפאנל)
  image: HiOutlinePhoto             // תמונה (עבור איכות תמונה/צבעים)
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;