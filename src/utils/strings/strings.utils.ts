export const formatMessage = (message: string, ...args: any[]) =>
  message.replace(/{(\d+)}/g, (match, number) =>
    args[number] !== undefined ? args[number] : match,
  );
