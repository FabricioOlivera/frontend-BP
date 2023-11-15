export class BaseService {
  private BASE_URL =
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp';
  private module: string;

  constructor(module: string) {
    this.module = module;
  }

  get APIurl(): string {
    return `${this.BASE_URL}/${this.module}`;
  }
}
