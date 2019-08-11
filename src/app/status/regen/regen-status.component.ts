import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const regenEndpoints = {
  api: 'https://libration.xyz/regen/api/validators',
  rpc1: 'https://libration.xyz/regen/rpc1/node_info',
  rpc2: 'https://libration.xyz/regen/rpc2/status',
  faucet: 'https://regen.coris.network/api/faucet/status'
};

export const initialRegenStatus = {
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
  },
  faucet: {
    status: 'syncing',
    logo: 'loop'
  }
};

@Component({
  selector: 'app-regen-status',
  templateUrl: './regen-status.component.html',
  styleUrls: ['./regen-status.component.css']
})
export class RegenStatusComponent implements OnInit {
  objectKeys = Object.keys;
  current = initialRegenStatus;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.updateStatus();
  }

  updateStatus() {
    this.current = initialRegenStatus;

    for(let endpoint in regenEndpoints) {
      this.httpClient.get(regenEndpoints[endpoint])
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
