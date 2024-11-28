import React, {useEffect} from 'react'
import classNames from 'classnames'

import slideUp from '../../../utilities/slideUp';
import slideDown from '../../../utilities/slideDown';
import getParents from '../../../utilities/getParents';

import { NavLink } from 'react-router-dom';

function MenuItemTemplate({ text,icon }) {
    return (
        <>
            {icon && <span className="nk-nav-icon">{icon}</span>}
            {text && <span className="nk-nav-text">{text}</span>}
        </>
    );
}

function MenuItemLink({ text, icon, sub, to, onClick, className }) {
    const compClass = classNames({
        'nk-nav-link': true,
        'nk-nav-toggle': sub,
        [className]: className,
    });
    return (
        <>
            {!sub && <NavLink className={compClass} to={to}><MenuItemTemplate icon={icon} text={text} /></NavLink>}
            {sub && <a className={compClass} onClick={onClick} href="#expand"><MenuItemTemplate icon={icon} text={text} /></a>}
        </>
    );
}

function MenuItem({ sub, className, ...props }) {
    const compClass = classNames({
        'nk-nav-item': true,
        'has-sub': sub,
        [className]: className,
    });
    return <li className={compClass}>{props.children}</li>;
}

function MenuSub({ className, ...props }) {
    const compClass = classNames({
        'nk-nav-sub': true,
        [className]: className,
    });
    return <ul className={compClass}>{props.children}</ul>;
}

function MenuList({ className, ...props }) {
    const compClass = classNames({
        'nk-nav': true,
        [className]: className,
    });
    return <ul className={compClass}>{props.children}</ul>;
}

function Menu() {
    // Dropdown toggle
    const dropdownToggle = (elm) => {
        let parent = elm.parentElement;
        let nextelm = elm.nextElementSibling;
        if (!parent.classList.contains('active')) {
            parent.classList.add('active');
            slideDown(nextelm, 400);
        } else {
            parent.classList.remove('active');
            slideUp(nextelm, 400);
        }
    };

    const menuToggle = (e) => {
        e.preventDefault();
        let item = e.target.closest('.nk-nav-toggle');
        dropdownToggle(item);
    };

    useEffect(() => {
        // Highlight active links
        let links = document.querySelectorAll('.nk-nav-link');
        links.forEach((link) => {
            if (link.classList.contains('active')) {
                let parent = link.closest('.nk-nav-item');
                if (parent) parent.classList.add('active');
            }
        });
    }, []);

    return (
        <MenuList>
            {/* Chat */}
            <MenuItem>
                <MenuItemLink text="Chat" to="/apps/chats" />
            </MenuItem>

            {/* Calendar */}
            <MenuItem>
                <MenuItemLink text="Calendar" to="/apps/calendar" />
            </MenuItem>

            {/* Kanban Board */}
            <MenuItem sub>
                <MenuItemLink text="Kanban board" onClick={menuToggle} sub />
                <MenuSub>
                    <MenuItem>
                        <MenuItemLink text="Basic" to="/apps/kanban/basic" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink text="Custom Board" to="/apps/kanban/custom" />
                    </MenuItem>
                </MenuSub>
            </MenuItem>

            {/* User Management */}
            <MenuItem sub>
                <MenuItemLink text="User Management" onClick={menuToggle} sub />
                <MenuSub>
                    <MenuItem>
                        <MenuItemLink text="User Lists" to="/user-manage/user-list" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink text="User Cards" to="/user-manage/user-cards" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink text="User Profile" to="/user-manage/user-profile/uid01" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink text="User Edit" to="/user-manage/user-edit/uid01" />
                    </MenuItem>
                </MenuSub>
            </MenuItem>

            {/* Auth Pages */}
            <MenuItem sub>
                <MenuItemLink text="Auth Pages" onClick={menuToggle} sub />
                <MenuSub>
                    <MenuItem>
                        <MenuItemLink text="Auth Register" to="/auths/auth-register" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink text="Auth Login" to="/auths/auth-login" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink text="Forgot Password" to="/auths/auth-reset" />
                    </MenuItem>
                </MenuSub>
            </MenuItem>

            {/* Page 404 */}
            <MenuItem>
                <MenuItemLink text="Page 404" to="/not-found" />
            </MenuItem>
        </MenuList>
    );
}

export default Menu;
