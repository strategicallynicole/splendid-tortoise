import styled from 'styled-components';

const NavigationWrap =  styled.header`
    background: transparent;
    position: fixed;
    width: 100%;
    z-index: 9999;
    top: 0;
    transition: all 0.3s ease 0s;
  .navbar-wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile-menu-icon {
    display: none;
    color: #ffffff;
    font-size: 24px;
  }

  /*Drop down style*/ 
  .dropdown{
    background: linear-gradient(357.64deg, rgba(50, 37, 91, 0.3) 1.79%, rgba(43, 42, 54, 0.3) 97.9%);
    visibility: hidden;
    border-radius: 20px;
    opacity: 0;
    min-width: 200px;
    position: absolute;
    margin-top: 1rem;
    left: 20px;
    padding: 15px 0px;
    display: none;
    box-shadow: -10px 8px 9px rgba(25, 1, 52, 0.5);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
  }
  ul li:hover > ul,
  ul li ul:hover {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    display: block;
  }
  
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
    li{
        position: relative;
        padding: 48px 0px 48px 40px;
        .dropdown{
          li{
            padding: 0;
            a{
              color: #ffffff !important;
              display: block;
              padding: 5px 15px;
              &:hover{
                color: var(--fivepm) !important;
              }
              &:before{
                content: none;
              }
            }
          }
        }
      
      a, .nav-active{
        position: relative;
        color: ${props => props.theme.menuColor ? props.theme.menuColor : '#1D316C'};
        font-size: 15px;
        transition: 450ms all;
        padding-bottom: 5px;
        cursor: pointer;
        &:before{
          content: '';
          position: absolute;
          left : 0;
          bottom:0;
          width: 20px;
          height: 1px;
          opacity: 0;
          background: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          transition: 450ms all;
        }
        &:hover{
          color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          &:before{
            opacity: 1;
          }
        }
      }
    }
  }
  .logo{
    margin-top: 8px;
    transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
    img{
      width: 135px;
    }
  }
  &.scrolled{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 30px;
    background: white;
    .logo{
        width: 135px;
    } 
    .nav{
      li{
        padding: 28px 0px 28px 40px;
        a{
          color: #1D316C;
          &:hover{
            color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          }
        }
      }
      li{
        .dropdown{
          li{
            padding: 0;
          }
        }
      }
    }
  }


  @media only screen and (max-width: 912px) {
    height: auto;
    min-height: 50px;
    padding: 15px 20px;
    background: #fff;
    &.scrolled{
        padding: 8px 20px;
        .nav .collapsed {
          li{
            padding: 0;
            a{
              padding: 8px 10px;
              display: block;
            }
          }
          li+li{
            padding-left: 0;
          }
        } 
    }
    .has-dropdown{
      a{
        position: relative;
        &:before{
          content: '';
          
        }
      }
    }
    .dropdown{
      position: relative;
      left: 0;
      margin-top: 0;
      box-shadow: none;
    }
    .navbar-wrap{
        display: block;
        position: relative;
    }
    .logo {
      width: 100%;
      display: block;
      margin: 7px 0 0 0;
      img{width: 110px;}
    }
    .mobile-menu-icon {
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 55%;
      cursor: pointer;
    }
    .nav{
        width: 100%;
      .collapsed {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        transition: 450ms all ease-in-out;
        overflow: hidden;
        max-height: 0;

        &.is-expanded {
          padding-top: 15px;
          overflow-y: auto;
          max-height: 250px; /* approximate max height */
        }
        li {
          padding: 0;
          margin: 0px 0px;
          width: 100%;
          .dropdown{
            li{
              a{
                color: #1D316C;
              }
            }
          }
          a{
            padding: 8px 10px;
            display: block;
            color: #1D316C;
            &:before{
              content: none;
            }
          }
        }
      }
    }
  }

`

export default NavigationWrap;