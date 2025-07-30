import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import SplashScreen from "../components/common/SplashScreen";
import Home from "@/pages/home/Home";
import Layout from "@/components/layout/Layout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Suspense fallback={<SplashScreen />}>
                            <Home />
                        </Suspense>
                    }
                />
            </Route>

            <Route path="/metrics" element={<Layout />}>
                <Route
                    index
                    element={
                        <Suspense fallback={<SplashScreen />}>
                            <Home />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
};

export default React.memo(Router);
