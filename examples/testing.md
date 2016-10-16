# Testing

`influx` is tested primarily with a suite of unit tests in additional to functional tests which require an InfluxDB instance to run. The recommended way of running Influx is use their official Docker image:

```
docker run -d -p 8083:8083 -p 8086:8086 --expose 8090 --expose 8099 influxdb
```

Alternately, you can use a local installation of the package. If you would like to contribute and don't want to set up a full Influx testing environment, you can run solely unit tests and linting via `npm-run-all test:unit test:lint`, which do not require anything other than an `npm install`.

When running tests you can configure where Influx lives by setting an environment variable which is a valid host to pass into the [ClusterConfig](https://node-influx.github.io/typedef/index.html#static-typedef-ClusterConfig) object.

```
➜  node-influx git:(master) export INFLUX_HOST='{"host":"127.0.0.1","port":12345}'
➜  node-influx git:(master) npm test
```

You can run `npm run test:watch` to watch files and automatically re-run tests when they change.
