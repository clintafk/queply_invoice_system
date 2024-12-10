import { Input } from "./input";

import React from "react";

export interface SearchInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

function SearchInput() {
    return <div>SearchInput</div>;
}

export default SearchInput;
