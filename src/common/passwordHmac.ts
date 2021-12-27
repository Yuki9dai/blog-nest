import * as crypto from 'crypto';

export function makeSalt(password: string): string {
  const hmac = crypto.createHmac('sha1', 'yuki9dai');
  const result = hmac.update(password).digest('hex');
  return result;
}
