
export const createFormData = <T extends Record<string, any>>(data: T): FormData => {
  const formData = new FormData();
  if (!data) {
    return formData;
  }
  Object.entries(data).map(([key, value]) => {
    if (value instanceof FileList) {
      for (let i = 0; i < value.length; i++) {
        formData.append(key, value[i]);
      }
      return;
    }
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else {
      if (typeof value === 'string') {
        formData.append(key, value);
      } else if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else {
        formData.append(key, JSON.stringify(value));
      }
    }
  });

  return formData;
};

export const parse = <T extends Record<string, any>>(formData: FormData): T => {
  return Array.from(formData.entries()).reduce((acc: T, [key, value]) => {
    return { ...acc, [key]: value };
  }, {} as T)
};
