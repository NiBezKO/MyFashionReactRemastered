import React from 'react';

import BurgerMenu from './BurgerMenu';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const loggedIn = useSelector((state) => state.authorization.loginIn);
  const [openMenu, setOpenMenu] = React.useState(false);

  const location = useLocation();
  console.log(location);
  return (
    <header className="header">
      <div className="header__inner header-inner">
        <div className="header-inner__logo">
          <Link to="/">
            <svg
              className="logo"
              viewBox="0 0 120 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M120 28.8917C120 25.8614 118.514 23.0893 117.2 20.6443C116.077 18.5609 115.074 16.667 115.333 15.2551C115.524 14.2392 116.249 13.6538 117.373 13.585C117.407 13.585 117.442 13.5677 117.477 13.5677C117.528 13.5505 117.58 13.5161 117.632 13.4817C117.684 13.4472 117.719 13.3956 117.736 13.3439C117.736 13.3267 117.753 13.3267 117.753 13.3095L118.306 11.8804C118.358 11.7254 118.375 11.6221 118.324 11.5188C118.289 11.4499 118.237 11.3811 118.151 11.3122C118.047 11.2261 117.874 11.1572 117.649 11.0884C117.338 10.9851 116.941 10.9162 116.578 10.9162C114.953 10.9162 112.966 11.4499 111.237 15.7372C111.168 15.9094 107.832 24.5184 107.729 24.7938C107.314 25.8097 106.432 27.0322 104.566 27.0322C103.753 27.0322 103.097 26.7222 102.734 26.2057C102.665 26.1024 102.613 25.9991 102.561 25.8958C102.423 25.5514 102.371 25.1382 102.457 24.6905C102.492 24.5356 102.526 24.3634 102.578 24.1912C102.665 23.8985 102.786 23.5714 102.924 23.2442C104.203 19.99 108.748 8.40236 110.148 4.83824C110.321 4.39058 110.079 4.029 109.595 4.029H107.988C107.815 4.029 107.625 4.08065 107.469 4.16674C107.176 4.30449 106.934 4.56276 106.813 4.83824C106.19 6.40508 105.309 8.67785 104.376 11.0711C103.65 12.9135 102.907 14.8247 102.215 16.5637C102.008 16.2193 101.766 15.8922 101.507 15.5822C101.23 15.2723 100.936 14.9796 100.625 14.7213C99.277 13.6194 97.5659 13.0168 95.682 13.0168C93.366 13.0168 91.1364 13.9465 89.3908 15.4617C89.3217 15.5134 89.2698 15.5822 89.2007 15.6339C89.1488 15.6683 89.1143 15.72 89.0624 15.7544C87.9217 16.8219 87.0229 18.1477 86.4699 19.6112C86.4699 19.6285 86.4526 19.6457 86.4526 19.6801C86.3834 19.8695 86.3316 20.0589 86.2625 20.2655C86.1588 20.6271 86.0723 20.9887 86.0205 21.3675C85.9686 21.7118 85.9341 22.0562 85.9168 22.4005C85.8822 23.3992 86.0378 24.3806 86.3489 25.2759C86.1933 25.5342 85.9859 25.7753 85.7612 25.9991C85.1217 26.6017 84.2748 26.9977 83.3934 27.0666C83.307 27.0666 83.2378 27.0666 83.1514 27.0666C82.8057 27.0666 82.4773 26.9977 82.1835 26.8944C81.8206 26.7567 81.5095 26.5329 81.3021 26.2401C80.9045 25.672 80.9045 24.8455 81.2675 23.8985C81.3539 23.6575 81.907 22.1939 82.4082 20.8854C82.7884 19.8695 83.1341 18.9225 83.2033 18.7331C83.2378 18.6298 83.307 18.4749 83.3588 18.2855C83.4452 17.9239 83.4971 17.4246 83.2551 16.908C83.1514 16.7014 83.0304 16.5292 82.8922 16.3743C82.6156 16.0816 82.2527 15.9094 81.907 15.7716C81.7687 15.72 81.6304 15.6683 81.4922 15.6339C81.2502 15.565 80.991 15.4617 80.6971 15.3412C80.6798 15.3412 80.6799 15.324 80.6626 15.324C80.1786 15.1174 77.8453 14.0326 77.8453 11.9665C77.8453 11.9148 77.8453 11.8632 77.8453 11.8287C77.8453 11.8115 77.8453 11.7943 77.8453 11.7771C77.8453 11.7599 77.8453 11.7254 77.8453 11.7082C77.8108 11.3983 77.7071 11.2089 77.5688 11.1056C77.5515 11.1056 77.5515 11.0884 77.5342 11.0884C77.5342 11.0884 77.5342 11.0884 77.517 11.0884C77.4997 11.0711 77.4824 11.0711 77.4651 11.0539C77.4651 11.0539 77.4651 11.0539 77.4478 11.0539C77.4478 11.0539 77.4478 11.0539 77.4305 11.0539C77.4133 11.0539 77.4132 11.0367 77.396 11.0367C77.3095 11.0023 77.2231 10.985 77.1194 10.985H75.5293C75.201 10.985 74.838 11.1572 74.596 11.4155C74.4923 11.5188 74.4059 11.6565 74.3541 11.7943C74.0084 12.6724 73.5936 13.7227 73.1615 14.8419C71.6405 18.7331 69.8258 23.3992 69.3072 24.725C69.29 24.7766 69.2727 24.8283 69.2554 24.8799C68.8406 25.8958 67.9591 27.1183 66.0752 27.1183C65.2629 27.1183 64.5888 26.8083 64.2432 26.2918C64.0358 25.9819 63.932 25.5859 63.9493 25.121C63.9666 24.7594 64.053 24.3634 64.2086 23.9502C64.537 23.0893 65.2456 21.2986 65.9888 19.4046C66.6974 17.5967 67.4406 15.6683 67.9591 14.3598C68.132 13.9121 67.89 13.5505 67.4061 13.5505H65.7987H65.6431C65.5394 13.5505 65.4184 13.5677 65.2974 13.6022C65.2802 13.6022 65.2802 13.6022 65.2629 13.6022C64.8826 13.7055 64.5024 13.9638 64.2777 14.2392C63.4481 15.2379 62.3765 16.0471 61.2012 16.6325C60.026 17.2179 58.7643 17.5967 57.5544 17.7345C57.3816 17.2868 57.1569 16.8392 56.8803 16.4259C56.8631 16.4087 56.8631 16.3915 56.8458 16.3743C56.6729 16.116 56.5001 15.8749 56.2927 15.6339C54.8582 13.981 52.8014 13.0684 50.4681 13.0684C49.2237 13.0684 48.0139 13.3439 46.8731 13.826C47.4435 12.3625 48.0139 10.8817 48.5496 9.48709C49.2064 7.78251 49.8286 6.19846 50.3299 4.8899C50.4163 4.68328 50.399 4.5111 50.3299 4.35614C50.2434 4.18396 50.0533 4.08065 49.7941 4.08065H49.7768H48.1867H48.1694C47.9793 4.08065 47.7719 4.14952 47.5818 4.25283C47.3571 4.37336 47.167 4.54554 47.0633 4.75215C47.046 4.80381 47.0114 4.83824 46.9941 4.8899C44.9374 10.1069 41.6535 18.5609 40.098 22.6072C39.6659 23.7091 39.3721 24.5011 39.2511 24.7938C38.8363 25.8097 37.9548 27.0322 36.0882 27.0322C35.9153 27.0322 35.7598 27.015 35.6215 26.9977C35.0339 26.8944 34.5326 26.6362 34.2561 26.2057C34.2043 26.1196 34.1524 26.0335 34.1006 25.9302C33.945 25.5859 33.8932 25.1554 33.9796 24.6905C34.0141 24.4667 34.1351 24.1051 34.2734 23.7435C34.4635 23.227 34.6536 22.7277 34.6536 22.7277C34.6536 22.7277 35.345 20.9715 36.3301 18.4232C36.4338 18.1477 36.5548 17.855 36.6758 17.5451C36.6931 17.5107 36.7104 17.4762 36.7104 17.4418C38.2313 13.5505 40.2708 8.29905 41.7399 4.5111C42.3276 2.9787 42.8288 1.68736 43.1744 0.826461C43.3473 0.378795 43.1053 0.0172176 42.6214 0.0172176H41.014C40.5301 0.0172176 40.0116 0.378795 39.8387 0.826461C39.6486 1.30856 37.9548 5.68192 36.0536 10.5718C33.5993 16.8736 30.8167 24.0363 30.5229 24.8111C30.4537 24.966 30.3846 25.121 30.2982 25.2759C30.0389 25.7753 29.6414 26.2574 29.0883 26.6017C28.6389 26.8772 28.0513 27.0494 27.3427 27.0666C26.6859 27.0666 26.1328 26.8772 25.7526 26.5156C25.6662 26.4295 25.5797 26.3435 25.4933 26.2401C25.2341 25.8441 25.1304 25.3448 25.2341 24.7594V24.7422C25.3205 24.2429 25.9946 22.4866 25.9946 22.4522C26.4266 21.3503 26.9279 20.0417 27.4637 18.647C29.2439 14.0843 31.4216 8.43679 32.8216 4.87268C32.8561 4.76937 32.8734 4.66606 32.8734 4.56276C32.8561 4.42501 32.8043 4.28727 32.7006 4.20118C32.5969 4.11509 32.4586 4.06344 32.2685 4.06344H30.6611C30.4883 4.06344 30.2982 4.11509 30.1253 4.20118C29.8834 4.3217 29.676 4.5111 29.555 4.73493C29.5377 4.76937 29.5031 4.82102 29.4858 4.85546C29.071 5.90576 28.6217 7.07658 28.1377 8.31627C27.6192 9.65927 27.0661 11.0884 26.4958 12.5174C24.2835 18.1994 22.0885 23.8985 21.7255 24.8111C21.6045 25.1038 21.449 25.3965 21.2588 25.6892C20.7403 26.4295 19.9107 27.0494 18.5453 27.0494C18.0441 27.0494 17.5947 26.9289 17.2318 26.7222C17.0244 26.5845 16.8342 26.4295 16.7133 26.2229C16.6268 26.0852 16.5577 25.9474 16.5059 25.7925C16.4022 25.4826 16.3849 25.121 16.454 24.725C16.5404 24.2429 17.0244 22.986 17.1108 22.7966C17.1108 22.7793 17.1281 22.7621 17.1281 22.7621L20.4292 14.2909C20.6021 13.8432 20.3601 13.4817 19.8762 13.4817H18.2688C17.975 13.4817 17.6639 13.6194 17.4219 13.826C17.4046 13.826 17.4046 13.8432 17.4046 13.8432C17.2663 13.9638 17.1626 14.1187 17.1108 14.2737L16.7824 15.1346L16.2639 16.4776C16.1602 16.3226 16.0565 16.1677 15.9528 16.0127C15.8491 15.8577 15.7281 15.72 15.6071 15.5822C15.0886 14.9796 14.4664 14.4631 13.7923 14.0671C12.6343 13.3783 11.2689 13.0168 9.79982 13.0168C6.18755 13.0168 2.7654 15.2895 1.08889 18.4921C0.622234 19.3874 0.293846 20.3516 0.138293 21.3503C-0.224662 23.6919 0.380264 25.913 1.83209 27.5831C2.28146 28.0997 2.78268 28.5474 3.35304 28.9089C3.45674 28.9778 3.57773 29.0467 3.69871 29.1155C4.85672 29.787 6.20484 30.1486 7.65666 30.1486C9.98994 30.1486 12.2541 29.1844 14.017 27.652C14.0689 27.7553 14.138 27.8586 14.2071 27.9619C14.2417 28.0136 14.2936 28.0825 14.3281 28.1341C14.3281 28.1513 14.3454 28.1513 14.3454 28.1686C14.38 28.2202 14.4318 28.2719 14.4664 28.3235C14.501 28.358 14.5355 28.3924 14.5528 28.4268C14.5701 28.4613 14.6047 28.4785 14.6392 28.5129C14.6911 28.5646 14.7429 28.6162 14.7775 28.6679C14.7948 28.6851 14.8121 28.7023 14.8294 28.7195C14.8985 28.7712 14.9503 28.8401 15.0195 28.8917C15.0195 28.8917 15.0195 28.8917 15.0368 28.9089C15.6244 29.4082 16.3676 29.8043 17.2318 30.0109C17.2491 30.0109 17.2663 30.0281 17.2836 30.0281C17.37 30.0453 17.4565 30.0625 17.5429 30.0798C17.5774 30.0798 17.612 30.097 17.6639 30.097C17.733 30.1142 17.8021 30.1142 17.8885 30.1314C17.9577 30.1314 18.0095 30.1486 18.0787 30.1486C18.1305 30.1486 18.1824 30.1658 18.2515 30.1658C18.3725 30.1658 18.4935 30.1831 18.6317 30.1831C19.5305 30.1831 20.3774 30.0109 21.1551 29.6837C21.449 29.5632 21.7255 29.4255 21.9848 29.2533C22.0712 29.2016 22.1576 29.15 22.244 29.0811C22.5897 28.8401 22.9181 28.5818 23.2119 28.2719C23.3156 28.4096 23.4366 28.5301 23.5576 28.6507C24.3526 29.4599 25.4242 29.9592 26.6513 30.1142C26.6859 30.1142 26.7377 30.1314 26.7723 30.1314C26.8069 30.1314 26.8414 30.1314 26.876 30.1314C26.9452 30.1314 27.0143 30.1486 27.0834 30.1486C27.118 30.1486 27.1526 30.1486 27.1698 30.1486C27.239 30.1486 27.3254 30.1486 27.3945 30.1486C29.192 30.1486 30.7821 29.4771 31.9574 28.2719C32.4068 28.8228 32.9771 29.2705 33.6339 29.5976C34.3771 29.9592 35.224 30.1486 36.1227 30.1486C36.5894 30.1486 37.0388 30.097 37.4709 30.0109C39.3548 29.6321 40.9103 28.444 41.8609 26.6534C41.9127 26.7395 41.9646 26.8083 42.0164 26.8944C42.0856 26.9977 42.1547 27.101 42.2239 27.2044C42.3276 27.3421 42.4313 27.4626 42.535 27.6004C43.9695 29.2533 46.0262 30.1658 48.3595 30.1658C51.5397 30.1658 54.5816 28.3924 56.3964 25.8097C57.226 24.6217 57.7964 23.2787 58.0211 21.8496C58.0729 21.488 58.1075 21.1264 58.1248 20.7648C58.4359 20.7304 58.747 20.6788 59.0408 20.6099C60.3716 20.3516 61.616 19.9212 62.7222 19.3358C62.6876 19.4218 62.6531 19.5252 62.6185 19.6112C62.1 20.9715 61.6333 22.1423 61.3914 22.7793C60.6309 24.6905 60.7519 26.5501 61.737 27.9964C62.1 28.5301 62.5666 28.9778 63.1024 29.3222C63.9666 29.8731 65.0036 30.1831 66.1443 30.1831C68.8924 30.1831 71.1566 28.6162 72.2282 25.9647C72.3664 25.6203 72.643 24.8972 73.0059 23.9502C73.7664 22.0045 74.9071 19.0775 75.9441 16.4259C76.0306 16.1849 76.1343 15.9438 76.2207 15.72C77.1194 16.8392 78.3293 17.6828 79.5046 18.1821C79.5737 18.2166 79.6255 18.2338 79.6947 18.2682C79.833 18.3199 79.9712 18.3715 80.0922 18.4232C79.5046 20.0073 78.5713 22.5211 78.4503 22.7966C77.9836 23.9846 77.8453 25.1382 78.0527 26.1885C78.1737 26.8428 78.433 27.4626 78.7959 28.0136C79.0379 28.358 79.3144 28.6679 79.6256 28.9434C80.4897 29.6837 81.6132 30.1314 82.8576 30.2003C82.9786 30.2003 83.0823 30.2175 83.2033 30.2175C83.3934 30.2175 83.5835 30.2003 83.7736 30.1831C83.8082 30.1831 83.86 30.1831 83.8946 30.1658C83.9119 30.1658 83.9292 30.1658 83.9464 30.1658C84.7415 30.0798 85.502 29.8387 86.2106 29.4943C86.9365 29.1328 87.5933 28.6507 88.1464 28.0825C89.2352 29.15 90.6352 29.8387 92.208 30.097C92.6401 30.1658 93.0895 30.2003 93.5561 30.2003C94.1438 30.2003 94.7314 30.1314 95.3018 30.0281C96.8746 29.7182 98.361 28.9778 99.6054 27.9619C99.7264 27.8759 99.8301 27.7725 99.9338 27.6692C100.003 27.7898 100.072 27.9103 100.141 28.0136C100.746 28.8917 101.61 29.5288 102.63 29.8904C102.682 29.9076 102.734 29.9248 102.768 29.942C102.82 29.9592 102.889 29.9764 102.941 29.9937C103.01 30.0109 103.062 30.0281 103.131 30.0453C103.183 30.0625 103.235 30.0625 103.287 30.0798C103.356 30.097 103.408 30.1142 103.477 30.1142C103.529 30.1314 103.581 30.1314 103.632 30.1486C103.702 30.1658 103.753 30.1658 103.823 30.1658C103.892 30.1658 103.961 30.1831 104.03 30.1831C104.082 30.1831 104.134 30.2003 104.186 30.2003C104.307 30.2003 104.428 30.2175 104.566 30.2175C107.314 30.2175 109.578 28.6507 110.65 25.9991C110.701 25.8441 111.704 23.3475 112.516 21.2814C112.758 20.6615 112.983 20.0761 113.156 19.6112C113.242 19.8006 113.346 20.0073 113.432 20.1967C113.761 20.8509 114.106 21.5224 114.469 22.2111C114.763 22.7621 115.074 23.3303 115.351 23.8985C116.198 25.5859 116.906 27.3077 116.906 28.995C116.906 33.971 113.519 34.8491 112.482 35.0041C111.79 35.1074 111.272 35.6411 111.168 36.2954C111.151 36.4504 111.134 36.6054 111.168 36.7603C111.168 36.812 111.185 36.8636 111.203 36.8981C111.376 37.5868 111.998 38.0861 112.706 38.0861C112.741 38.0861 112.775 38.0861 112.827 38.0861C112.862 38.0861 112.896 38.0861 112.948 38.0861C113.761 37.9656 114.625 37.7073 115.437 37.3113C117.84 35.9683 120 33.3512 120 28.8917ZM100.089 21.333C99.7955 23.3648 98.4992 25.1554 96.8055 26.1713C96.7882 26.1885 96.7536 26.2057 96.7363 26.2057C96.7363 26.2057 96.719 26.2057 96.719 26.2229C95.8203 26.7395 94.8178 27.0322 93.7808 27.0322C93.2969 27.0322 92.8302 26.9633 92.3981 26.8256C91.6376 26.5845 90.9636 26.1541 90.4624 25.5514C89.9612 24.9488 89.65 24.2084 89.5291 23.382V23.3648C89.4599 22.8654 89.4599 22.3489 89.5463 21.8151C89.6673 21.0231 89.9266 20.2655 90.3241 19.5768C90.8426 18.647 91.5685 17.855 92.4154 17.2524C93.4352 16.5464 94.6277 16.116 95.8549 16.116C96.6845 16.116 97.4449 16.3054 98.0844 16.6842C98.4992 16.9252 98.8622 17.2352 99.1733 17.5967C99.3289 17.7861 99.4671 17.9755 99.5708 18.1821C99.9683 18.8709 100.158 19.6801 100.158 20.541C100.158 20.7993 100.141 21.0575 100.089 21.333ZM46.9423 26.8772C46.0954 26.6534 45.3695 26.2057 44.8337 25.5342C44.0213 24.5528 43.693 23.227 43.9004 21.7979V21.7807C43.9522 21.4191 44.0386 21.1092 44.125 20.8509C44.246 20.541 44.367 20.2139 44.5053 19.8867C44.5226 19.8351 44.5571 19.8006 44.5744 19.749C44.6263 19.6629 44.6608 19.5768 44.7127 19.4907C44.73 19.4563 44.7473 19.4391 44.7645 19.4046C45.1448 18.7676 45.6114 18.1994 46.1472 17.7173C47.2879 16.7186 48.7225 16.0988 50.2089 16.0988C50.8829 16.0988 51.5224 16.2365 52.0755 16.4776C52.6459 16.7358 53.1298 17.0974 53.5273 17.5795C54.3397 18.5609 54.668 19.8867 54.4606 21.333C53.994 24.4667 51.1595 27.0322 48.1348 27.0322C47.72 27.0322 47.3225 26.9805 46.9423 26.8772ZM7.82949 27.0322C6.46409 27.0322 5.28881 26.4984 4.49376 25.5514C4.40734 25.4481 4.33821 25.3448 4.26907 25.2415C3.6123 24.2945 3.37033 23.0893 3.56045 21.7979C4.0271 18.6643 6.8789 16.0988 9.92081 16.0988C11.2862 16.0988 12.4615 16.6325 13.2565 17.5795C14.0689 18.5609 14.4145 19.8867 14.1899 21.333C14.1553 21.5741 14.1034 21.8151 14.0343 22.0562C13.2738 24.8455 10.6294 27.0322 7.82949 27.0322Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__list nav-list">
            <li className="nav-list__item">
              <Link to="/" className="nav-list__link">
                Главная
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/shop" className="nav-list__link">
                Магазин
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/about" className="nav-list__link">
                О бренде
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/contacts" className="nav-list__link">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="phone">
          <span>
            <svg className="phone-svg" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z" />
            </svg>
          </span>
          <p>+7 (495) 823-54-12</p>
        </div>
        <div className="header-inner__user">
          <Link to="/login">
            {loggedIn ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#0092E4"
                  d="M13.3,12.22A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5ZM21.71,9.13a1,1,0,0,0-1.42,0l-2,2-.62-.63a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l1.34,1.34a1,1,0,0,0,1.41,0l2.67-2.67A1,1,0,0,0,21.71,9.13Z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
              </svg>
            )}
          </Link>
        </div>
        {!openMenu ? (
          <div onClick={() => setOpenMenu(!openMenu)} className="burger">
            <span className="burger__content"></span>
          </div>
        ) : (
          <>
            <svg
              className="burger__close"
              onClick={() => setOpenMenu(!openMenu)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
            </svg>
          </>
        )}
        {openMenu && <BurgerMenu setOpenMenu={setOpenMenu} />}
        <div className="header__favorites header-favorites">
          <Link to="/favorites">
            <svg
              className="header-favorites__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="20"
              viewBox="0 0 15 14"
              fill="none">
              <path
                d="M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z"
                fill="#FF8585"
              />
            </svg>
          </Link>
        </div>
        {location.pathname !== '/cart' && (
          <div className="header__cart header-cart">
            <div className="header-cart__totalprice">
              {totalPrice}
              <span>р</span>
            </div>
            <Link to="/cart">
              <svg className="header-cart__svg" xmlns="http://www.w3.org/2000/svg">
                <path d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z" />
              </svg>
            </Link>
            <span className="header-cart__count">{totalCount}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
