import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const baseUrl = ['home', 'details', 'dashboard', 'profile'];

const useCurrentLocation = () => {
  const { pathname } = useLocation();
  const splitedPathname = pathname.split('/');
  const [baseLocation, setBaseLocation] = useState(
    `/${baseUrl.includes(splitedPathname[1]) && splitedPathname[1]}`
  );

  useEffect(() => {
    setBaseLocation(`/${baseUrl.includes(splitedPathname[1]) && splitedPathname[1]}`);
  }, [pathname]);

  return [baseLocation, pathname];
};

export default useCurrentLocation;
