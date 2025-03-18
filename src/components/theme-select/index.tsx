import { useEffect } from 'react';
  import { setThemeMode } from '@/helpers/utils';
  import { ThemeValue } from '@/typings/global';

  const ThemeSelect = () => {
    // 컴포넌트 마운트 시 light 테마 강제 적용
    useEffect(() => {
      localStorage.setItem('theme', ThemeValue.Light);
      setThemeMode(ThemeValue.Light);
    }, []);

    return (
      <div
        className="bg-slate3 text-slate8 relative flex items-center rounded-full p-0.5"
        aria-label="테마 설정: 라이트 모드"
      >
        <div className="bg-slate1 absolute left-[30px] top-0.5 h-7 w-7 rounded-full"></div>
      </div>
    );
  };

  export default ThemeSelect;
