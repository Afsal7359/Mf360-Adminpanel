import React from 'react'
import Dashboard from '../../assets/img/icons/menu-icon-01.svg'
import logouticon from '../../assets/img/icons/logout.svg'
import Doctors from '../../assets/img/icons/menu-icon-02.svg'
import Posts from '../../assets/img/icons/menu-icon-03.svg'
import settings from '../../assets/img/icons/menu-icon-16.svg'
import Bankicon from '../../assets/img/icons/menu-icon-04.svg'
// import Company from '../../assets/img/icons/company.png'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                        <li className="menu-title"></li>
						<li className="submenu">
							<Link to="/"><span className="menu-side"><img src={Dashboard} alt=""/></span> <span> Dashboard </span></Link>
						
						</li>
						<li className="submenu">
							<a href="#"><span className="menu-side"><img src={Doctors} alt=""/></span> <span>Shop</span> <span className="menu-arrow"></span></a>
							<ul style={{ display:'none'}}>
                            <li><Link to="/shop">Add Shop</Link></li>
                            
							</ul>
						</li>
            <li className="submenu">
							<a href="#"><span className="menu-side"><img src={Doctors} alt=""/></span> <span>Products</span> <span className="menu-arrow"></span></a>
							<ul style={{ display:'none'}}>
                            <li><Link to="/product">Add Products</Link></li>
                            
							</ul>
						</li>
            <li className="submenu">
							<a href="#"><span className="menu-side"><img src={Doctors} alt=""/></span> <span>Area</span> <span className="menu-arrow"></span></a>
							<ul style={{ display:'none'}}>
                            <li><Link to="/area">Add Area</Link></li>
                            
							</ul>
						</li>
            <li className="submenu">
							<a href="#"><span className="menu-side"><img src={Doctors} alt=""/></span> <span>Orders</span> <span className="menu-arrow"></span></a>
							<ul style={{ display:'none'}}>
                            <li><Link to="/orders">Orders List</Link></li>
                            
							</ul>
						</li>
                       
                      
                    </ul>
					<div className="logout-btn">
						<a href="login.html"><span className="menu-side"><img src={logouticon} alt=""/></span> <span>Logout</span></a>
					</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar