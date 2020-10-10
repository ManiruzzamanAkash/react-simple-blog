import React from 'react'

const HeaderSidebar = () => {
    return ( 
        <>
         <nav id="sidebar" aria-label="Main Navigation">
                <div className="content-header bg-white-5">
                    <a className="font-w600 text-dual" href="index.html">
                        <i className="fa fa-circle-notch text-primary"></i>
                        <span className="smini-hide">
                            <span className="font-w700 font-size-h5">ne</span> <span className="font-w400">4.5</span>
                        </span>
                    </a>
                    
                    <div>
                        <div className="dropdown d-inline-block ml-2">
                            <a className="btn btn-sm btn-dual" id="sidebar-themes-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="si si-drop"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right font-size-sm smini-hide border-0" aria-labelledby="sidebar-themes-dropdown">
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="default" href="#">
                                    <span>Default</span>
                                    <i className="fa fa-circle text-default"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/amethyst.min.css" href="#">
                                    <span>Amethyst</span>
                                    <i className="fa fa-circle text-amethyst"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/city.min.css" href="#">
                                    <span>City</span>
                                    <i className="fa fa-circle text-city"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" href="#">
                                    <span>Flat</span>
                                    <i className="fa fa-circle text-flat"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/modern.min.css" href="#">
                                    <span>Modern</span>
                                    <i className="fa fa-circle text-modern"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/smooth.min.css" href="#">
                                    <span>Smooth</span>
                                    <i className="fa fa-circle text-smooth"></i>
                                </a>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item" data-toggle="layout" data-action="sidebar_style_light" href="#">
                                    <span>Sidebar Light</span>
                                </a>
                                <a className="dropdown-item" data-toggle="layout" data-action="sidebar_style_dark" href="#">
                                    <span>Sidebar Dark</span>
                                </a>

                                <div className="dropdown-divider"></div>

                               <a className="dropdown-item" data-toggle="layout" data-action="header_style_light" href="#">
                                    <span>Header Light</span>
                                </a>
                                <a className="dropdown-item" data-toggle="layout" data-action="header_style_dark" href="#">
                                    <span>Header Dark</span>
                                </a>
                            </div>
                        </div>

                        <a className="d-lg-none btn btn-sm btn-dual ml-2" data-toggle="layout" data-action="sidebar_close">
                            <i className="fa fa-fw fa-times"></i>
                        </a>
                    </div>
                </div>

                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        <li className="nav-main-item">
                            <a className="nav-main-link active" href="be_pages_dashboard.html">
                                <i className="nav-main-link-icon si si-speedometer"></i>
                                <span className="nav-main-link-name">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-layers"></i>
                                <span className="nav-main-link-name">Page Packs</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon si si-bag"></i>
                                        <span className="nav-main-link-name">e-Commerce</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_dashboard.html">
                                                <span className="nav-main-link-name">Dashboard</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_orders.html">
                                                <span className="nav-main-link-name">Orders</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_order.html">
                                                <span className="nav-main-link-name">Order</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_products.html">
                                                <span className="nav-main-link-name">Products</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_product_edit.html">
                                                <span className="nav-main-link-name">Product Edit</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_customer.html">
                                                <span className="nav-main-link-name">Customer</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon si si-handbag"></i>
                                        <span className="nav-main-link-name">e-Commerce Store</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_store_home.html">
                                                <span className="nav-main-link-name">Home</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_store_search.html">
                                                <span className="nav-main-link-name">Search Results</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_store_products.html">
                                                <span className="nav-main-link-name">Products List</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_store_product.html">
                                                <span className="nav-main-link-name">Product Page</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_store_checkout.html">
                                                <span className="nav-main-link-name">Checkout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon si si-pencil"></i>
                                        <span className="nav-main-link-name">Blog</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_blog_classic.html">
                                                <span className="nav-main-link-name">Classic</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_blog_list.html">
                                                <span className="nav-main-link-name">List</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_blog_grid.html">
                                                <span className="nav-main-link-name">Grid</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_blog_story.html">
                                                <span className="nav-main-link-name">Story</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_blog_story_cover.html">
                                                <span className="nav-main-link-name">Story Cover</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon si si-graduation"></i>
                                        <span className="nav-main-link-name">e-Learning</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_elearning_courses.html">
                                                <span className="nav-main-link-name">Courses</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_elearning_course.html">
                                                <span className="nav-main-link-name">Course</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_elearning_lesson.html">
                                                <span className="nav-main-link-name">Lesson</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon si si-bubbles"></i>
                                        <span className="nav-main-link-name">Forum</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_forum_categories.html">
                                                <span className="nav-main-link-name">Categories</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_forum_topics.html">
                                                <span className="nav-main-link-name">Topics</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_forum_discussion.html">
                                                <span className="nav-main-link-name">Discussion</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon si si-magnet"></i>
                                        <span className="nav-main-link-name">Boxed Backend</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_dashboard.html">
                                                <span className="nav-main-link-name">Dashboard</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_search.html">
                                                <span className="nav-main-link-name">Search</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_simple_1.html">
                                                <span className="nav-main-link-name">Simple 1</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_simple_2.html">
                                                <span className="nav-main-link-name">Simple 2</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_image_1.html">
                                                <span className="nav-main-link-name">Image 1</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_image_2.html">
                                                <span className="nav-main-link-name">Image 2</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_video_1.html">
                                                <span className="nav-main-link-name">Video 1</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="bd_video_2.html">
                                                <span className="nav-main-link-name">Video 2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-heading">User Interface</li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-energy"></i>
                                <span className="nav-main-link-name">Blocks</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_blocks_styles.html">
                                        <span className="nav-main-link-name">Styles</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_blocks_options.html">
                                        <span className="nav-main-link-name">Options</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_blocks_forms.html">
                                        <span className="nav-main-link-name">Forms</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_blocks_themed.html">
                                        <span className="nav-main-link-name">Themed</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_blocks_api.html">
                                        <span className="nav-main-link-name">API</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-badge"></i>
                                <span className="nav-main-link-name">Elements</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_grid.html">
                                        <span className="nav-main-link-name">Grid</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_typography.html">
                                        <span className="nav-main-link-name">Typography</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_icons.html">
                                        <span className="nav-main-link-name">Icons</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_buttons.html">
                                        <span className="nav-main-link-name">Buttons</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_buttons_groups.html">
                                        <span className="nav-main-link-name">Button Groups</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_dropdowns.html">
                                        <span className="nav-main-link-name">Dropdowns</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_tabs.html">
                                        <span className="nav-main-link-name">Tabs</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_navigation.html">
                                        <span className="nav-main-link-name">Navigation</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_navigation_horizontal.html">
                                        <span className="nav-main-link-name">Horizontal Navigation</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_progress.html">
                                        <span className="nav-main-link-name">Progress</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_alerts.html">
                                        <span className="nav-main-link-name">Alerts</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_tooltips.html">
                                        <span className="nav-main-link-name">Tooltips</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_popovers.html">
                                        <span className="nav-main-link-name">Popovers</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_modals.html">
                                        <span className="nav-main-link-name">Modals</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_images.html">
                                        <span className="nav-main-link-name">Images Overlay</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_timeline.html">
                                        <span className="nav-main-link-name">Timeline</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_ribbons.html">
                                        <span className="nav-main-link-name">Ribbons</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_animations.html">
                                        <span className="nav-main-link-name">Animations</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_ui_color_themes.html">
                                        <span className="nav-main-link-name">Color Themes</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-grid"></i>
                                <span className="nav-main-link-name">Tables</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_tables_styles.html">
                                        <span className="nav-main-link-name">Styles</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_tables_responsive.html">
                                        <span className="nav-main-link-name">Responsive</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_tables_helpers.html">
                                        <span className="nav-main-link-name">Helpers</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_tables_pricing.html">
                                        <span className="nav-main-link-name">Pricing</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_tables_datatables.html">
                                        <span className="nav-main-link-name">DataTables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-note"></i>
                                <span className="nav-main-link-name">Forms</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_elements.html">
                                        <span className="nav-main-link-name">Elements</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_custom_controls.html">
                                        <span className="nav-main-link-name">Custom Controls</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_layouts.html">
                                        <span className="nav-main-link-name">Layouts</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_input_groups.html">
                                        <span className="nav-main-link-name">Input Groups</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_plugins.html">
                                        <span className="nav-main-link-name">Plugins</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_editors.html">
                                        <span className="nav-main-link-name">Editors</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_validation.html">
                                        <span className="nav-main-link-name">Validation</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_forms_wizard.html">
                                        <span className="nav-main-link-name">Wizard</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-heading">Develop</li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-wrench"></i>
                                <span className="nav-main-link-name">Components</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_loaders.html">
                                        <span className="nav-main-link-name">Loaders</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_image_cropper.html">
                                        <span className="nav-main-link-name">Image Cropper</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_appear.html">
                                        <span className="nav-main-link-name">Appear</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_charts.html">
                                        <span className="nav-main-link-name">Charts</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_calendar.html">
                                        <span className="nav-main-link-name">Calendar</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_sliders.html">
                                        <span className="nav-main-link-name">Sliders</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_syntax_highlighting.html">
                                        <span className="nav-main-link-name">Syntax Highlighting</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_rating.html">
                                        <span className="nav-main-link-name">Rating</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_maps_google.html">
                                        <span className="nav-main-link-name">Google Maps</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_maps_vector.html">
                                        <span className="nav-main-link-name">Vector Maps</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_dialogs.html">
                                        <span className="nav-main-link-name">Dialogs</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_notifications.html">
                                        <span className="nav-main-link-name">Notifications</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_comp_gallery.html">
                                        <span className="nav-main-link-name">Gallery</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-magic-wand"></i>
                                <span className="nav-main-link-name">Layout</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <span className="nav-main-link-name">Page</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_page_default.html">
                                                <span className="nav-main-link-name">Default</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_page_flipped.html">
                                                <span className="nav-main-link-name">Flipped</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_page_native_scrolling.html">
                                                <span className="nav-main-link-name">Native Scrolling</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <span className="nav-main-link-name">Main Content</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_content_main_full_width.html">
                                                <span className="nav-main-link-name">Full Width</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_content_main_narrow.html">
                                                <span className="nav-main-link-name">Narrow</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_content_main_boxed.html">
                                                <span className="nav-main-link-name">Boxed</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <span className="nav-main-link-name">Header</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-heading">Fixed</li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_header_fixed_light.html">
                                                <span className="nav-main-link-name">Light</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_header_fixed_dark.html">
                                                <span className="nav-main-link-name">Dark</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-heading">Static</li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_header_static_light.html">
                                                <span className="nav-main-link-name">Light</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_header_static_dark.html">
                                                <span className="nav-main-link-name">Dark</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <span className="nav-main-link-name">Sidebar</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_sidebar_mini.html">
                                                <span className="nav-main-link-name">Mini</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_sidebar_light.html">
                                                <span className="nav-main-link-name">Light</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_sidebar_dark.html">
                                                <span className="nav-main-link-name">Dark</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_sidebar_hidden.html">
                                                <span className="nav-main-link-name">Hidden</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <span className="nav-main-link-name">Side Overlay</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_side_overlay_visible.html">
                                                <span className="nav-main-link-name">Visible</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_side_overlay_mode_hover.html">
                                                <span className="nav-main-link-name">Hover Mode</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_layout_side_overlay_no_page_overlay.html">
                                                <span className="nav-main-link-name">No Page Overlay</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_layout_api.html">
                                        <span className="nav-main-link-name">API</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-puzzle"></i>
                                <span className="nav-main-link-name">Multi Level Menu</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="#">
                                        <span className="nav-main-link-name">Link 1-1</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="#">
                                        <span className="nav-main-link-name">Link 1-2</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <span className="nav-main-link-name">Sub Level 2</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="#">
                                                <span className="nav-main-link-name">Link 2-1</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="#">
                                                <span className="nav-main-link-name">Link 2-2</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                <span className="nav-main-link-name">Sub Level 3</span>
                                            </a>
                                            <ul className="nav-main-submenu">
                                                <li className="nav-main-item">
                                                    <a className="nav-main-link" href="#">
                                                        <span className="nav-main-link-name">Link 3-1</span>
                                                    </a>
                                                </li>
                                                <li className="nav-main-item">
                                                    <a className="nav-main-link" href="#">
                                                        <span className="nav-main-link-name">Link 3-2</span>
                                                    </a>
                                                </li>
                                                <li className="nav-main-item">
                                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                        <span className="nav-main-link-name">Sub Level 4</span>
                                                    </a>
                                                    <ul className="nav-main-submenu">
                                                        <li className="nav-main-item">
                                                            <a className="nav-main-link" href="#">
                                                                <span className="nav-main-link-name">Link 4-1</span>
                                                            </a>
                                                        </li>
                                                        <li className="nav-main-item">
                                                            <a className="nav-main-link" href="#">
                                                                <span className="nav-main-link-name">Link 4-2</span>
                                                            </a>
                                                        </li>
                                                        <li className="nav-main-item">
                                                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                                <span className="nav-main-link-name">Sub Level 5</span>
                                                            </a>
                                                            <ul className="nav-main-submenu">
                                                                <li className="nav-main-item">
                                                                    <a className="nav-main-link" href="#">
                                                                        <span className="nav-main-link-name">Link 5-1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-main-item">
                                                                    <a className="nav-main-link" href="#">
                                                                        <span className="nav-main-link-name">Link 5-2</span>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-main-item">
                                                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="nav-main-link-name">Sub Level 6</span>
                                                                    </a>
                                                                    <ul className="nav-main-submenu">
                                                                        <li className="nav-main-item">
                                                                            <a className="nav-main-link" href="#">
                                                                                <span className="nav-main-link-name">Link 6-1</span>
                                                                            </a>
                                                                        </li>
                                                                        <li className="nav-main-item">
                                                                            <a className="nav-main-link" href="#">
                                                                                <span className="nav-main-link-name">Link 6-2</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-heading">Pages</li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-layers"></i>
                                <span className="nav-main-link-name">Generic</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_blank.html">
                                        <span className="nav-main-link-name">Blank</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_blank_block.html">
                                        <span className="nav-main-link-name">Blank (Block)</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_search.html">
                                        <span className="nav-main-link-name">Search</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_profile.html">
                                        <span className="nav-main-link-name">Profile</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_profile_edit.html">
                                        <span className="nav-main-link-name">Profile Edit</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_inbox.html">
                                        <span className="nav-main-link-name">Inbox</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_invoice.html">
                                        <span className="nav-main-link-name">Invoice</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_faq.html">
                                        <span className="nav-main-link-name">FAQ</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_team.html">
                                        <span className="nav-main-link-name">Team</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_contact.html">
                                        <span className="nav-main-link-name">Contact</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_support.html">
                                        <span className="nav-main-link-name">Support</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_generic_upgrade_plan.html">
                                        <span className="nav-main-link-name">Upgrade Plan</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_maintenance.html">
                                        <span className="nav-main-link-name">Maintenance</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_status.html">
                                        <span className="nav-main-link-name">Status</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_coming_soon.html">
                                        <span className="nav-main-link-name">Coming Soon</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-lock"></i>
                                <span className="nav-main-link-name">Authentication</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_auth_all.html">
                                        <span className="nav-main-link-name">All</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_signin.html">
                                        <span className="nav-main-link-name">Sign In</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_signin2.html">
                                        <span className="nav-main-link-name">Sign In 2</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_signup.html">
                                        <span className="nav-main-link-name">Sign Up</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_signup2.html">
                                        <span className="nav-main-link-name">Sign Up 2</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_lock.html">
                                        <span className="nav-main-link-name">Lock Screen</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_lock2.html">
                                        <span className="nav-main-link-name">Lock Screen 2</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_reminder.html">
                                        <span className="nav-main-link-name">Pass Reminder</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_auth_reminder2.html">
                                        <span className="nav-main-link-name">Pass Reminder 2</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-fire"></i>
                                <span className="nav-main-link-name">Error Pages</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="be_pages_error_all.html">
                                        <span className="nav-main-link-name">All</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_error_400.html">
                                        <span className="nav-main-link-name">400</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_error_401.html">
                                        <span className="nav-main-link-name">401</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_error_403.html">
                                        <span className="nav-main-link-name">403</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_error_404.html">
                                        <span className="nav-main-link-name">404</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_error_500.html">
                                        <span className="nav-main-link-name">500</span>
                                    </a>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link" href="op_error_503.html">
                                        <span className="nav-main-link-name">503</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default HeaderSidebar;