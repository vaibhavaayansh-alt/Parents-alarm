import { useState } from 'react';
import {
  MapPin, Phone, Users, Shield, Bus, Navigation, Clock,
  CheckCircle2, AlertCircle, Camera, Snowflake, UserCircle2, Flame,
} from 'lucide-react';
import { BUS_ROUTES, VAN_ROUTES, TRANSPORT_INFO, TRANSPORT_SAFETY } from '../../data/demoData';
import Badge from '../../components/ui/Badge';

export default function BusLocation() {
  const [tab, setTab] = useState('buses');
  const [selected, setSelected] = useState(BUS_ROUTES[0]);

  const vehicles = tab === 'buses' ? BUS_ROUTES : VAN_ROUTES;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Bus Location</h1>
        <p className="text-sm text-slate-500 mt-1">Live tracking — {TRANSPORT_INFO.branch}</p>
      </div>

      {/* Info Banner */}
      <div className="card p-5 bg-gradient-to-br from-orange-50 to-white dark:from-orange-500/5 dark:to-slate-900 border border-orange-100 dark:border-orange-500/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center shrink-0">
            <Bus className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-slate-900 dark:text-white">Safe Transport Facility</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              {TRANSPORT_INFO.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              <Stat icon={Bus} label="Total Buses" value={TRANSPORT_INFO.totalBuses} />
              <Stat icon={Navigation} label="Total Vans" value={TRANSPORT_INFO.totalVans} />
              <Stat icon={Shield} label="Safety" value={TRANSPORT_INFO.safetyRating} />
              <Stat icon={Users} label="Monthly Fee" value={`₹${TRANSPORT_INFO.monthlyFee}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div>
        <h2 className="font-semibold text-slate-900 dark:text-white mb-3">Safety & Comfort Features</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TRANSPORT_SAFETY.map((s) => (
            <div key={s.title} className="card p-4 hover:shadow-card-hover transition">
              <div className="text-2xl">{s.icon}</div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mt-2">{s.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => { setTab('buses'); setSelected(BUS_ROUTES[0]); }}
          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
            tab === 'buses'
              ? 'bg-orange-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Bus className="w-4 h-4 inline mr-1.5" /> Buses ({BUS_ROUTES.length})
        </button>
        <button
          onClick={() => { setTab('vans'); setSelected(VAN_ROUTES[0]); }}
          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
            tab === 'vans'
              ? 'bg-orange-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Navigation className="w-4 h-4 inline mr-1.5" /> Vans ({VAN_ROUTES.length})
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Vehicle List */}
        <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto pr-2">
          {vehicles.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelected(v)}
              className={`w-full text-left card p-4 transition-all ${
                selected?.id === v.id
                  ? 'border-2 border-orange-500 shadow-md'
                  : 'hover:shadow-card-hover'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 dark:text-white text-sm">{v.name}</span>
                <Badge tone="success">{v.status}</Badge>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">{v.route}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1"><Users className="w-3 h-3" />{v.currentStudents}/{v.capacity}</span>
                <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />ETA {v.eta}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Live Detail */}
        <div className="lg:col-span-2 space-y-4">
          {/* Live Location Card */}
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{selected?.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{selected?.route}</p>
              </div>
              <Badge tone="success">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </Badge>
            </div>

            {/* Simulated Map */}
            <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 h-56 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }} />
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M 20 200 Q 100 150 200 180 T 400 100" stroke="#f97316" strokeWidth="4" fill="none" strokeDasharray="8 4" />
              </svg>
              <div className="absolute left-[45%] top-[35%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-30" />
                  <div className="relative w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-lg text-white">
                    <Bus className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <div className="bg-white dark:bg-slate-900 rounded-lg px-3 py-2 shadow-md">
                  <p className="text-[10px] text-slate-500">Current Location</p>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{selected?.currentLocation}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg px-3 py-2 shadow-md">
                  <p className="text-[10px] text-slate-500">Next Stop</p>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{selected?.nextStop}</p>
                </div>
              </div>
            </div>

            {/* Driver info */}
            <div className="grid sm:grid-cols-3 gap-3 mt-5">
              <InfoBox icon={UserCircle2} label="Driver" value={selected?.driver} />
              <InfoBox icon={Phone} label="Driver Phone" value={selected?.driverPhone} />
              <InfoBox icon={Shield} label="Vehicle No." value={selected?.vehicleNo} />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3">
              <FeatureTag active icon={Snowflake} label="AC" />
              <FeatureTag active icon={Camera} label="CCTV" />
              <FeatureTag active icon={Navigation} label="GPS" />
            </div>
          </div>

          {/* Route Stops */}
          <div className="card p-5">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Route Stops</h3>
            <div className="space-y-1">
              {selected?.stops.map((stop, i) => (
                <div key={stop.name} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${
                      stop.current ? 'bg-orange-500 ring-4 ring-orange-200 dark:ring-orange-500/30' :
                      stop.done ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'
                    }`} />
                    {i < selected.stops.length - 1 && (
                      <div className={`w-0.5 h-10 ${stop.done ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
                    )}
                  </div>
                  <div className="flex-1 flex items-center justify-between pb-2">
                    <div>
                      <p className={`text-sm font-medium ${stop.current ? 'text-orange-700 dark:text-orange-400' : 'text-slate-800 dark:text-slate-100'}`}>
                        {stop.name}
                      </p>
                      <p className="text-xs text-slate-500">{stop.time}</p>
                    </div>
                    {stop.current && <Badge tone="warning">Current</Badge>}
                    {stop.done && !stop.current && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="text-center p-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
      <Icon className="w-4 h-4 text-orange-700 dark:text-orange-400 mx-auto" />
      <p className="text-[10px] text-slate-500 mt-1">{label}</p>
      <p className="text-sm font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}

function InfoBox({ icon: Icon, label, value }) {
  return (
    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
      <div className="flex items-center gap-1.5 text-xs text-slate-500">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <p className="text-sm font-medium text-slate-900 dark:text-white mt-1 truncate">{value}</p>
    </div>
  );
}

function FeatureTag({ active, icon: Icon, label }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium ${
      active ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-slate-100 text-slate-400'
    }`}>
      <Icon className="w-3.5 h-3.5" /> {label}
      {active && <CheckCircle2 className="w-3 h-3" />}
    </div>
  );
                        }
