import React from "react";
// import { motion } from 'framer-motion';
import Header from "./Header";
import SettingsSection from "./SettingsSection";
// import { useGetSettingsQuery } from '../store/api';

export default function SettingsContent() {
  // const { data, isLoading } = useGetSettingsQuery();
  // console.log({ data });
  return (
    <div>
      <Header />
      <SettingsSection />
    </div>
  );
}
