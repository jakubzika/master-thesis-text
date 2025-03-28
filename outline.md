## 1. Introduction
   1.1. Background and Motivation
      - Climate change and EU legislation driving EV adoption
      - Challenges for the electric power sector
      - The need for strategic charging infrastructure planning
   
   1.2. Problem Statement
      - Predicting hourly-ish electrical demand for newly placed EV chargers in Prague
      - Importance for grid stability, investment planning, and infrastructure development
   
   1.3. Research Objectives
      - Develop a prediction model for EV charging demand
      - Evaluate different machine learning approaches
      - ?Apply the model to future EV adoption scenarios?
      - Provide recommendations for charging infrastructure development
   
   1.4. Thesis Structure Overview

## 2. Literature Review
   2.1. Electric Vehicle Adoption
      - Current trends and future projections
      - EU and Czech Republic policies and targets
      - Barriers and enablers for EV adoption
   
   2.2. EV Charging Infrastructure
      - Types of charging stations and their characteristics
      - Current state of charging infrastructure in Prague.
      - Challenges in infrastructure development (chicken and egg problem)
   
   2.3. Charging Demand Modeling Approaches
      - Time series forecasting methods
      - Machine learning approaches (Neural Networks, LSTMs, Gaussian mixture models)
      - Adversarial Networks for EV charging load prediction (?questionable)
      - Simulation traffic agents
	  - Location based generative learning of charging session probabilty distribution and reconstruction
   
   2.4. Factors Influencing Charging Demand
      - Temporal factors (time of day, day of week, seasonality)
      - Spatial factors (Points of Interest, population density, traffic patterns)
      - Socioeconomic factors
      - EV user behaviour patterns

## 3. Methodology
   3.1. Research Design
      - Overall approach and framework
      - Data-driven modeling strategy
   
   3.2. Data Collection and Sources
      - Charging session data from existing stations
      - OpenStreetMap data for Points of Interest
      - Building data and ZSJ population density
      - Unused data for potential future use
	      - Traffic and mobility data
	      - EV adoption projections
   
   3.3. Feature Engineering
      - Spatial features (POI importance factors, building density)
      - Temporal features (time-based patterns, seasonality)
      - questionable ? Contextual features (traffic patterns, mobility data)
   
   3.4. Model Development
      - Neural network architecture design
      - Training and validation approach
      - Hyper parameter optimization
      - Model evaluation metrics

## 4. Data Preparation and Analysis
   4.1. Charging Session Data
      - Description of available datasets
      - Data cleaning and preprocessing (?)
      - Exploratory data analysis
      - Temporal patterns identification (?)
      - Cutting charging data into daily profiles
   
   4.2. Spatial Data Processing
      - Points of Interest extraction and categorization
      - Importance factor calculation for POIs
      - Building data integration
      - Spatial feature creation
   
   4.3. Feature Selection and Importance Analysis
      - Statistical significance of different features
      - Correlation analysis
      - Feature importance ranking

## 5. Model Implementation
   5.1. Neural Network Architecture
      - Detailed description of the chosen architecture
      - Input and output layers design
      - Hidden layers configuration
      - Activation functions and optimization methods
   
   5.2. Alternative Models for Comparison
      - Time series models
      - Traditional machine learning approaches
      - Ensemble methods
   
   5.3. Training Process
      - Dataset splitting strategy
      - Training parameters and configuration
      - Convergence analysis
      - Challenges and solutions

## 6. Results and Evaluation
   6.1. Model Performance Metrics
      - Prediction accuracy measures
      - Error analysis
      - Comparison between different models
   
   6.2. Feature Importance Analysis
      - Impact of different features on prediction accuracy
      - Spatial vs. temporal feature importance
      - Key determinants of charging demand
   
   6.3. Case Studies
      - Comparison between different types of areas in Prague

## 7. Discussion
   8.1. Model Limitations and Uncertainties
      - Data limitations
      - Model assumptions
      - External factors not captured
   
   8.2. Practical Implications
      - For city planners and policymakers
      - For energy providers and grid operators
      - For charging infrastructure investors
   
   8.3. Methodological Contributions
      - Advances in charging demand prediction
      - Novel feature engineering approaches
      - Latent profiles
      - Integration of spatial and temporal factors

## 8. Conclusion and Future Work
   9.1. Summary of Findings
      - Key results and insights
      - Answers to research questions
   
   9.2. Contributions to Knowledge
      - Theoretical contributions
      - Practical contributions
   
   9.3. Recommendations for Future Research
      - Model improvements
      - Additional data sources
      - Extended applications

## 9. References

## 10. Appendices
    11.1. Technical Implementation Details
    11.2. Additional Data Analysis
    11.3. Model Validation Tests
    11.4. Visualization Gallery
