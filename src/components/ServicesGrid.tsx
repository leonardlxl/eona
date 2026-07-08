import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {services.map((service) => (
        <div
          key={service.id}
          className="glass-panel group rounded-2xl p-8 transition hover:border-violet-500/30"
        >
          <span className="text-2xl text-violet-400">{service.icon}</span>
          <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
