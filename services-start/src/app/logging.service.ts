export class LoggingService {

  logChangeStatus(accountStatus: string) {
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
