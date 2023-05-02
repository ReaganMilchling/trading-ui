export class AppService {


    public async getDefault(): Promise<any> {
        const response = await fetch('/ticker/default');
        return await response.json();
    }

    public async getTickers(): Promise<any> {
        const response = await fetch('/ticker/all');
        return await response.json();
    }

}