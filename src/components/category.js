import React from "react";
import FilterButtons from "./in1categpry";
import FilterSearchButtons from "./FilterSearchButtons";
import SearchPanel from "./SearchPanel";
import FilterPanel from "./FilterPanel";

import '../template/assets/css/main.css';
import '../template/assets/css/util.css';
import '../template/assets/images/icons/favicon.png';
import '../template/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../template/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../template/assets/fonts/iconic/css/material-design-iconic-font.min.css';
import '../template/assets/fonts/linearicons-v1.0.0/icon-font.min.css';
import '../template/assets/vendor/animate/animate.css';
import '../template/assets/vendor/css-hamburgers/hamburgers.min.css';
import '../template/assets/vendor/animsition/css/animsition.min.css';
import '../template/assets/vendor/select2/select2.min.css';
import '../template/assets/vendor/daterangepicker/daterangepicker.css';
import '../template/assets/vendor/slick/slick.css';
import '../template/assets/vendor/MagnificPopup/magnific-popup.css';
import '../template/assets/vendor/perfect-scrollbar/perfect-scrollbar.css';


function Category(){
    return(
        <div class="flex-w flex-sb-m p-b-52">
            <FilterButtons/>
            <FilterSearchButtons/>
            <SearchPanel/>
            <FilterPanel/>

        </div>
    )
}
export default Category;