import { InfluxDB, HostConfig, FieldType } from '../../src';
import * as path from 'path';

const sampleData = require('fs')
  .readFileSync(path.join(__dirname, '../fixture/integrateSampleData.json'))
  .toString()
  .split('\n')
  .filter(line => line.length > 0)
  .map(line => JSON.parse(line));

const details: HostConfig = process.env.INFLUX_HOST
  ? JSON.parse(process.env.INFLUX_HOST)
  : { host: '127.0.01', port: 8086 };

export const db = process.env.INFLUX_TEST_DB || 'influx_test_db';

export function newClient(): Promise<InfluxDB> {
  const client = new InfluxDB({
    database: db,
    hosts: [details],
    schema: [
      {
        measurement: 'h2o_feet',
        tags: ['location'],
        fields: {
          'level description': FieldType.STRING,
          water_level: FieldType.FLOAT,
        },
      },
      {
        measurement: 'h2o_quality',
        tags: ['location', 'randtag'],
        fields: { index: FieldType.INTEGER },
      },
    ],
  });

  return client.dropDatabase(db)
    .then(() => client.createDatabase(db))
    .then(() => client);
}

export function writeSampleData(db: InfluxDB): Promise<void> {
  return db.writePoints(sampleData, { precision: 's' });
}
