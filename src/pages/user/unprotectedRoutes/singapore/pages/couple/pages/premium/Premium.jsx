// =====================================================
// SINGAPORE - COUPLE PREMIUM PAGE
// =====================================================

import { data, activities } from "./config";

// =====================================================
// PAGE
// =====================================================

export default function Premium() {
  return (
    <div>
      <h1>{data.title}</h1>

      {data.content.map((text, index) => (
        <p key={index}>{text}</p>
      ))}

      <div>
        <h2>Activities</h2>

        {activities.map((activity) => (
          <div key={activity.day}>
            <h3>
              Day {activity.day}: {activity.title}
            </h3>

            {activity.plans.map((plan, index) => (
              <div key={index}>
                <h4>{plan.title}</h4>

                <ul>
                  {plan.data.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}