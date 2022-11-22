import { Routes, Route } from "react-router-dom";
import { DetailedJob } from "./DetailedJobPage";
import { JobList } from "./JobListPage";

export function Router() {

    return (
        <Routes>
            <Route path={"/"} element={<JobList />} />
            <Route path={"/:productID"} element={<DetailedJob />} />
        </Routes>
    )
}