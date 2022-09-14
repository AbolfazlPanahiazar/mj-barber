type StorageType = 'sessionStorage' | 'localStorage';
type UseStorageReturnValue = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => boolean;
  removeItem: (key: string) => void;
};

export const useStorage = (type: StorageType): UseStorageReturnValue => {
  const storageType: StorageType = type;

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string): string | null => {
    return isBrowser ? window[storageType][key] : null;
  };

  const setItem = (key: string, value: string): boolean => {
    if (isBrowser) {
      window[storageType].setItem(key, value);
      return true;
    }

    return false;
  };

  const removeItem = (key: string): void => {
    window[storageType].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
