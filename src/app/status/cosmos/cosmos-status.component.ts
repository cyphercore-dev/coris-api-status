import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const cosmosEndpoints = {
  api: 'https://coris.network/cosmos/api/validators',
  rpc1: 'https://coris.network/cosmos/rpc1/node_info',
  rpc2: 'https://coris.network/cosmos/rpc2/status'
}

export const initialCosmosStatus = {
  api: {
    status: 'syncing',
    logo: 'loop'
  },
  rpc1: {
    status: 'syncing',
    logo: 'loop'
  },
  rpc2: {
    status: 'syncing',
    logo: 'loop'
  }
}; 

@Component({
  selector: 'app-cosmos-status',
  templateUrl: './cosmos-status.component.html',
  styleUrls: ['./cosmos-status.component.css']
})
export class CosmosStatusComponent implements OnInit {
  objectKeys = Object.keys;
  current = initialCosmosStatus;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.updateStatus();
  }

  updateStatus() {
    this.current = initialCosmosStatus;

    for(let endpoint in cosmosEndpoints) {
      this.httpClient.get(cosmosEndpoints[endpoint])
      .subscribe(
        (res: any) => {
          this.current[endpoint] = { status: 'up', logo: 'check' };
        },
        (error) => {
          this.current[endpoint] = { status: 'down', logo: 'error' };
        });
    }
  }

}
