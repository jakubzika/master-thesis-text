Analysis of Research Papers

This document categorizes papers from the provided BibTeX files based on their research approaches and the issues they address in the fields of electric vehicles (EVs), charging infrastructure, and transportation modeling.

## Research Approaches

### Data-Driven and Machine Learning Approaches
1. **Hecht et al. (2024)** [@hechtGlobalElectricVehicle2024] - Uses neural networks trained on thousands of public charging stations in Germany to predict charging station utilization. Creates a web interface for visualizing predictions across Europe.
2. **Ma et al. (2024)** [@maSpatialHeterogeneityAnalysis2024] - Employs multi-scale geographically weighted regression (MGWR) to analyze spatial heterogeneity in the distribution of EV charging points in Beijing.
3. **Wang et al. (2023)** [@wangHeterogeneousSpatiotemporalGraph2023] - Develops a heterogeneous spatio-temporal graph convolutional network to predict EV charging demand at different spatial and temporal resolutions.
4. **Zhang et al. (2023)** [@zhangChargingDemandPrediction2023] - Uses real-world EV data from Beijing to create a "multi-level & multi-dimension" framework for extracting travel and charging characteristics, with GMM and K-means clustering to categorize users.
5. **Almaghrebi et al. (2020)** [@almaghrebiDataDrivenCharging2020] - Applies supervised machine learning regression methods (including XGBoost) to predict charging demand at public charging stations using seven years of charging event data.
6. **Buechler et al. (2021)** [@buechlerGenerativeAdversarialNetworks2021] - Develops generative adversarial networks (GANs) to learn distributions of EV charging sessions and disentangled representations.
7. **Jiang & Luo (2022)** [@jiangGraphNeuralNetworks2022] - Reviews graph neural network applications for traffic forecasting, including road traffic flow, speed forecasting, and demand forecasting in ride-hailing platforms.
8. **Uglickich & Nagy (2025)** [@uglickichPoissonbasedFrameworkPredicting2025] - Creates a Poisson-based framework for predicting count data, applied to traffic counts in Prague areas, using recursive Bayesian estimation of Poisson mixtures.
9. **Šimbera (2019)** [@simberaNeighborhoodFeaturesGeospatial2019] - Presents a method for spatial disaggregation using random forests with neighborhood features in geospatial machine learning.
10. **Aasa et al. (2021)** [@aasaSpatialInterpolationMobile2021] - Compares five different methods of spatial interpolation of mobile positioning data, finding adaptive Morton grid and Random forest models most effective.
11. **Zhan & Datta (2024)** [@zhanEmbeddingNeuralNetworks2024] - Proposes embedding neural networks within traditional geostatistical models to accommodate non-linear mean functions while retaining advantages of Gaussian Processes.

### Optimization and Mathematical Modeling
1. **Elomiya et al. (2024)** [@elomiyaAdvancedSpatialDecision2024] - Develops an advanced spatial decision model for hydrogen refueling stations using GIS, MCDM, Fuzzy AHP, and Fuzzy C-Means clustering, optimized with genetic algorithms.
2. **Yi et al. (2023)** [@yiAgentbasedModelingApproach2023] - Uses agent-based modeling for public charging demand estimation and applies a capacitated maximal coverage location problem (CMCLP) model for charging station location optimization.
3. **Yang & Hu (2023)** [@yangLearningbasedDemandSupplyCoupled2023] - Presents a learning-based demand-supply-coupled charging station location problem for EV demand management.
4. **Zhou et al. (2022)** [@zhouLocationOptimizationEV2022] - Develops a social total cost model and genetic algorithm-based optimization for charging station locations in Ireland.
5. **Mrkos & Basmadjian (2022)** [@mrkosDynamicPricingCharging2022] - Uses Monte Carlo Tree Search for dynamic pricing of EV charging to increase revenue or optimize utilization.
6. **Mrkos et al. (2018)** [@mrkosRevenueMaximizationEV2018] - Proposes a Markov Decision Process approach to revenue-maximizing dynamic pricing for charging service providers.
7. **Dong et al. (2019)** [@dongChargingPointPlacement2019] - Combines spatial statistics and maximal coverage location models for EV charging point placement optimization.
8. **He et al. (2016)** [@heOptimalLocationsPublic2016] - Incorporates institutional and spatial factors in selecting optimal locations for public EV charging facilities using set covering, maximal covering location, and p-median models.
9. **Cavadas et al. (2015)** [@cavadasMIPModelLocating2015] - Presents a MIP model for locating slow-charging stations in urban areas accounting for driver tours.
10. **Yıldız et al. (2016)** [@yildizBranchPriceApproach2016] - Develops a branch and price approach for routing and refueling station location model.
11. **Zhu et al. (2017)** [@zhuPlanningEVCharging2017] - Plans EV charging stations based on queuing theory, optimizing capacity with minimum cost as the target.
12. **Neumann (2021)** [@neumannOptimalPlacementScaling2021] - Formulates the problem of optimal placement and scaling of charging infrastructure as an integer linear program with a deterministic model of charging demand.
13. **Jeřábek (2020)** [@jerabekOptimizationChargingCapacities2020] - Uses historical fleet data to determine appropriate size of charging stations and optimize placement between individual stations within a complex.

### Simulation and Stochastic Modeling
1. **Powell et al. (2022)** [@powellScalableProbabilisticEstimates2022] - Creates scalable probabilistic estimates of EV charging using a graphical modeling approach with hierarchical clustering to group drivers by charging histories.
2. **Yang et al. (2023)** [@yangSeasonalVarianceEV2023] - Studies seasonal variance in EV charging demand using GPS trajectory data from Beijing and explores its impact on infrastructure deployment.
3. **Helmus et al. (2020)** [@helmusDatadrivenTypologyEV2020] - Develops a data-driven typology of EV user types and charging sessions using a two-step clustering approach on 4.9 million charging transactions.
4. **Cui et al. (2022)** [@cuiEVUsagePattern2022] - Analyzes EV usage patterns using massive real-world data from Beijing, providing statistical results and multi-dimensional comparative analysis.
5. **Wang et al. (2017)** [@wangModelingPluginEV2017] - Models plug-in EV travel patterns and charging load based on trip chain generation using the Naive Bayes model.
6. **Brady & O'Mahony (2016)** [@bradyStochasticSimulationMethodology2016] - Uses stochastic simulation methodology to generate daily travel and charging profiles for EVs with a non-parametric copula function.
7. **Alizadeh et al. (2014)** [@alizadehScalableStochasticModel2014] - Proposes a stochastic model based on queueing theory for EV and PHEV charging demand.
8. **Ul-Haq et al. (2018)** [@ulhaqProbabilisticModelingEV2018] - Develops a probabilistic model of EV charging patterns in residential distribution networks considering vehicle class, battery capacity, SOC, and driving habits.
9. **Muratori et al. (2013)** [@muratoriHighlyresolvedModelPersonal2013] - Creates a highly-resolved model of personal transportation energy consumption in the US, simulating driver behavior, generating realistic driving profiles, and simulating energy consumption.
10. **Sadeghianpourhamami et al. (2018)** [@sadeghianpourhamamiQuantitativeAnalysisEV2018] - Provides quantitative analysis of EV flexibility using a data-driven approach, characterizing charging behavior through clustering.

### Network Analysis and Spatial Modeling
1. **Mureddu et al. (2018)** [@muredduComplexNetworkApproach2018] - Uses complex network approach to estimate energy demand of electric mobility, applying centrality measures to identify important areas in regional mobility.
2. **Jaroš (2024)** [@jarosGeolocationDataResearch2024] - Uses geolocation data as a research tool for organization of settlement systems and mobility mapping, developing a model for data acquisition and preliminary analysis.
3. **Lloyd et al. (2017)** [@lloydUtilityGridsAnalyzing2017] - Explores the utility of grids for analyzing long-term population change, generating population surfaces using small area data.
4. **Barbosa et al. (2017)** [@barbosaHumanMobilityModels2017] - Reviews human mobility models and applications, focusing on individual and collective mobility patterns.
5. **Yi et al. (2022)** [@yiDatadrivenApproachOptimize2022] - Performs a data-driven approach to optimize EV public charging using a modified geographical PageRank model to estimate charging demand.

### Multi-Agent Transport Simulation (MATSim)
1. **Alvarez et al. (2024)** [@alvarezMATSimModelMethodology2024] - Develops a MATSim model methodology to generate cycling-focused transport scenarios in England.
2. **Bischoff & Nagel (2017)** [@bischoffIntegratingExplicitParking2017] - Integrates explicit parking search into MATSim transport simulation, demonstrating the impact of parking search traffic in a residential area of Berlin.

## Issues Addressed

### Charging Infrastructure Planning and Optimization
1. **Hecht et al. (2024)** [@hechtGlobalElectricVehicle2024] - Addresses the challenge of optimal placement of EV charging stations based on where people spend time.
2. **Elomiya et al. (2024)** [@elomiyaAdvancedSpatialDecision2024] - Tackles strategic placement of hydrogen refueling stations in urban areas.
3. **Ma et al. (2024)** [@maSpatialHeterogeneityAnalysis2024] - Examines the impact of built environment on deployment of public EV charging points and spatial variations.
4. **Yi et al. (2023)** [@yiAgentbasedModelingApproach2023] - Addresses public charging demand estimation and charging station location optimization at urban scale.
5. **Yang & Hu (2023)** [@yangLearningbasedDemandSupplyCoupled2023] - Focuses on demand-supply-coupled charging station location problem for EV demand management.
6. **Zhou et al. (2022)** [@zhouLocationOptimizationEV2022] - Addresses location optimization of EV charging stations based on cost model and genetic algorithm.
7. **Dong et al. (2019)** [@dongChargingPointPlacement2019] - Tackles EV charging point placement optimization using spatial statistics and maximal coverage location models.
8. **He et al. (2016)** [@heOptimalLocationsPublic2016] - Addresses selection of optimal locations for public EV charging facilities incorporating institutional and spatial factors.
9. **Cavadas et al. (2015)** [@cavadasMIPModelLocating2015] - Focuses on locating slow-charging stations in urban areas accounting for driver tours.
10. **Yıldız et al. (2016)** [@yildizBranchPriceApproach2016] - Addresses routing and refueling station location model.
11. **Zhu et al. (2017)** [@zhuPlanningEVCharging2017] - Tackles planning of EV charging stations based on queuing theory.
12. **Pagany et al. (2019)** [@paganyUserDestinationbasedApproach2019] - Develops a user- and destination-based approach for locating charging stations for EVs.
13. **Neumann (2021)** [@neumannOptimalPlacementScaling2021] - Addresses optimal placement and scaling of charging infrastructure for company fleets.
14. **Jeřábek (2020)** [@jerabekOptimizationChargingCapacities2020] - Focuses on optimization of charging capacities for electric vehicles in company fleets.
15. **Zuo (2019)** [@zuoPredictionDistributionEV2019] - Addresses prediction and distribution of EV charging stations with priorities for urban and rural development.
16. **Metais et al. (2022)** [@metaisModelingOptionsPlanningElectric2022] - Reviews modeling options for planning electric vehicle charging infrastructure.

### Charging Demand Prediction and Analysis
1. **Wang et al. (2023)** [@wangHeterogeneousSpatiotemporalGraph2023] - Addresses predicting EV charging demand using a heterogeneous spatio-temporal graph convolutional network.
2. **Zhang et al. (2023)** [@zhangChargingDemandPrediction2023] - Focuses on charging demand prediction in Beijing based on real-world electric vehicle data.
3. **Yang et al. (2023)** [@yangSeasonalVarianceEV2023] - Examines seasonal variance in EV charging demand and its impacts on infrastructure deployment.
4. **Powell et al. (2022)** [@powellScalableProbabilisticEstimates2022] - Addresses scalable probabilistic estimates of EV charging given observed driver behavior.
5. **Almaghrebi et al. (2020)** [@almaghrebiDataDrivenCharging2020] - Focuses on data-driven charging demand prediction at public charging stations.
6. **Helmus et al. (2020)** [@helmusDatadrivenTypologyEV2020] - Addresses typology of EV user types and charging sessions.
7. **Cui et al. (2022)** [@cuiEVUsagePattern2022] - Examines EV usage pattern analysis driven by massive real-world data.
8. **Wang et al. (2017)** [@wangModelingPluginEV2017] - Addresses modeling of plug-in EV travel patterns and charging load based on trip chain generation.
9. **Brady & O'Mahony (2016)** [@bradyStochasticSimulationMethodology2016] - Focuses on modeling charging profiles of EVs based on real-world charging data.
10. **Pekárek (2017)** [@pekarekModelChargingService2017] - Develops a model of charging service demand for the Czech Republic.
11. **Sadeghianpourhamami et al. (2018)** [@sadeghianpourhamamiQuantitativeAnalysisEV2018] - Addresses quantitative analysis of EV flexibility using a data-driven approach.

### Grid Impact and Energy Management
1. **Powell et al. (2022)** [@powellScalableProbabilisticEstimates2022] - Examines charging infrastructure access and operation to reduce grid impacts of deep EV adoption.
2. **Powell et al. (2021)** [@powellLargescaleScenariosEV2021] - Addresses large-scale scenarios of EV charging with a data-driven model of control.
3. **Mrkos & Basmadjian (2022)** [@mrkosDynamicPricingCharging2022] - Focuses on dynamic pricing for charging of EVs with Monte Carlo Tree Search.
4. **Mrkos et al. (2018)** [@mrkosRevenueMaximizationEV2018] - Addresses revenue maximization for EV charging service providers using sequential dynamic pricing.
5. **Mureddu et al. (2018)** [@muredduComplexNetworkApproach2018] - Examines energy demand estimation of electric mobility using complex network approach.
6. **Alizadeh et al. (2014)** [@alizadehScalableStochasticModel2014] - Addresses scalable stochastic model for electricity demand of EVs and PHEVs.
7. **Axsen & Kurani (2010)** [@axsenAnticipatingPluginHybrid2010] - Examines anticipating plug-in hybrid vehicle energy impacts by constructing consumer-informed recharge profiles.
8. **Green et al. (2011)** [@greenImpactPluginHybrid2011] - Reviews the impact of plug-in hybrid EVs on distribution networks.
9. **Neaimeh et al. (2015)** [@neaimehProbabilisticApproachCombine2015] - Uses a probabilistic approach to combine smart meter and EV charging data to investigate distribution network impacts.
10. **Ul-Haq et al. (2018)** [@ulhaqProbabilisticModelingEV2018] - Addresses probabilistic modeling of EV charging pattern in a residential distribution network.

### Mobility Analysis and Spatial Modeling
1. **Jaroš (2024)** [@jarosGeolocationDataResearch2024] - Addresses geolocation data as a research tool for organization of settlement systems and mobility mapping.
2. **Uglickich & Nagy (2025)** [@uglickichPoissonbasedFrameworkPredicting2025] - Focuses on predicting count data with application to traffic counts in Prague areas.
3. **Šimbera (2019)** [@simberaNeighborhoodFeaturesGeospatial2019] - Addresses neighborhood features in geospatial machine learning for population disaggregation.
4. **Aasa et al. (2021)** [@aasaSpatialInterpolationMobile2021] - Examines spatial interpolation of mobile positioning data for population statistics.
5. **Lloyd et al. (2017)** [@lloydUtilityGridsAnalyzing2017] - Explores the utility of grids for analyzing long-term population change.
6. **Barbosa et al. (2017)** [@barbosaHumanMobilityModels2017] - Reviews human mobility models and applications.
7. **Muratori et al. (2013)** [@muratoriHighlyresolvedModelPersonal2013] - Addresses highly-resolved modeling of personal transportation energy consumption.

### Digital Twins and Urban Modeling
1. **Callcut et al. (2021)** [@callcutDigitalTwinsCivil2021] - Explores definitions, concepts, and applications of digital twins within civil infrastructure systems, including transportation and smart cities.
2. **AMOS | Metacity (2022)** [@AMOSMetacity2022] - Describes a collaboration project with Prague city focused on urban modeling and simulation.
3. **Virtualizace Prahy a 3D datový model** [@VirtualizacePrahy3D] - Presents a 3D data model and virtualization of Prague for urban planning and management.

### Activity-Based Travel Modeling
1. **Whitney (2019)** [@whitneyActivityTripBased2019] - Provides an overview of activity and trip-based travel models for urban transportation planning.
2. **Modelling Activity Scheduling Behaviour with Deep Generative Machine Learning (2025)** [@PDFModellingActivity2025] - Uses deep generative machine learning to model human activity scheduling behavior for transportation planning.
3. **Alvarez et al. (2024)** [@alvarezMATSimModelMethodology2024] - Develops methodology for generating cycling-focused transport scenarios using activity-based modeling.
4. **Bischoff & Nagel (2017)** [@bischoffIntegratingExplicitParking2017] - Addresses the integration of parking search behavior into transport simulation using within-day replanning methodology.

## Cross-Cutting Themes

### Geographic Focus
1. **European Focus**:
   - Hecht et al. (2024) [@hechtGlobalElectricVehicle2024] - Germany and Europe
   - Elomiya et al. (2024) [@elomiyaAdvancedSpatialDecision2024] - Prague, Czechia
   - Uglickich & Nagy (2025) [@uglickichPoissonbasedFrameworkPredicting2025] - Prague, Czech Republic
   - Mureddu et al. (2018) [@muredduComplexNetworkApproach2018] - Sardinia, Italy
   - Neumann (2021) [@neumannOptimalPlacementScaling2021] - Czech Republic
   - Jeřábek (2020) [@jerabekOptimizationChargingCapacities2020] - Czech Republic
   - Pekárek (2017) [@pekarekModelChargingService2017] - Czech Republic
   - Cavadas et al. (2015) [@cavadasMIPModelLocating2015] - Coimbra, Portugal
   - Zhou et al. (2022) [@zhouLocationOptimizationEV2022] - Ireland
2. **Asian Focus**:
   - Ma et al. (2024) [@maSpatialHeterogeneityAnalysis2024] - Beijing, China
   - Wang et al. (2023) [@wangHeterogeneousSpatiotemporalGraph2023] - Beijing, China
   - Zhang et al. (2023) [@zhangChargingDemandPrediction2023] - Beijing, China
   - Yang et al. (2023) [@yangSeasonalVarianceEV2023] - Beijing, China
   - Cui et al. (2022) [@cuiEVUsagePattern2022] - Beijing, China
   - He et al. (2016) [@heOptimalLocationsPublic2016] - Beijing, China
3. **North American Focus**:
   - Powell et al. (2022) [@powellScalableProbabilisticEstimates2022] - US Western Interconnection
   - Powell et al. (2021) [@powellLargescaleScenariosEV2021] - California
   - Muratori et al. (2013) [@muratoriHighlyresolvedModelPersonal2013] - United States
   - Axsen & Kurani (2010) [@axsenAnticipatingPluginHybrid2010] - California

### Temporal Evolution of Research
1. **Early Focus (2010-2015)**:
   - Initial studies on grid impacts [@greenImpactPluginHybrid2011]
   - Early charging behavior models [@axsenAnticipatingPluginHybrid2010]
   - Basic infrastructure planning models [@cavadasMIPModelLocating2015]
2. **Middle Period (2016-2020)**:
   - More sophisticated optimization models [@heOptimalLocationsPublic2016]
   - Increased use of real-world data [@bradyStochasticSimulationMethodology2016]
   - Development of user typologies [@helmusDatadrivenTypologyEV2020]
3. **Recent Developments (2021-2025)**:
   - Advanced machine learning approaches [@wangHeterogeneousSpatiotemporalGraph2023]
   - Large-scale data analysis [@cuiEVUsagePattern2022]
   - Integration of multiple methodologies [@elomiyaAdvancedSpatialDecision2024]
   - Focus on seasonal and temporal variations [@yangSeasonalVarianceEV2023]

### Data Sources
1. **Real-world Charging Data**:
   - Hecht et al. (2024) [@hechtGlobalElectricVehicle2024] - Charging stations in Germany
   - Almaghrebi et al. (2020) [@almaghrebiDataDrivenCharging2020] - Seven years of charging events in Nebraska, USA
   - Helmus et al. (2020) [@helmusDatadrivenTypologyEV2020] - 4.9 million charging transactions from the Netherlands
2. **GPS and Mobility Data**:
   - Yang et al. (2023) [@yangSeasonalVarianceEV2023] - GPS trajectory data from Beijing
   - Cui et al. (2022) [@cuiEVUsagePattern2022] - 2,047,222 charging events and 8,382,032 travel events from Beijing
   - Zhang et al. (2023) [@zhangChargingDemandPrediction2023] - Three-month real-world travel and charging records of 25,489 EVs
3. **Simulation and Synthetic Data**:
   - Powell et al. (2021) [@powellLargescaleScenariosEV2021] - Scenarios for California's 2030 charging demand
   - Brady & O'Mahony (2016) [@bradyStochasticSimulationMethodology2016] - Synthetic datasets capturing uncertainty of travel and charging behavior

### Synthetic Population Generation
1. **Data Specification | Metacity (2022)** [@DataSpecificationMetacity2022] - Defines and describes preprocessing of available data to create a synthetic population for urban modeling.
2. **Eqasim-Org/Synpp (2024)** [@EqasimorgSynpp2024] - Provides a synthetic population pipeline code for transportation modeling.

## Conclusion

The research spans multiple approaches and addresses various issues across electric vehicles, charging infrastructure, and transportation modeling. Data-driven and machine learning approaches have become increasingly prevalent in recent years, particularly for charging demand prediction, infrastructure planning, and activity modeling. Optimization and mathematical modeling remain important for solving complex location and resource allocation problems. Simulation and stochastic modeling help capture the inherent variability in EV user behavior and charging patterns.

Multi-agent transport simulation (MATSim) emerges as a powerful approach for modeling complex transportation systems, allowing for the integration of various aspects such as parking search, activity scheduling, and infrastructure planning. Digital twins and urban modeling provide frameworks for visualizing and analyzing urban systems, supporting decision-making in transportation planning and infrastructure development.

Geographic focus varies, with significant research conducted in China (particularly Beijing), Europe, and North America. The temporal evolution of research shows a progression from basic models to more sophisticated approaches incorporating large-scale data analysis, advanced machine learning techniques, and integrated simulation environments.

The cross-cutting themes identified in this analysis highlight the multidisciplinary nature of research in these fields, combining elements of transportation planning, energy management, spatial analysis, behavioral modeling, and urban informatics. Future research will likely continue to integrate these diverse approaches to address the complex challenges of sustainable urban mobility, EV adoption, and charging infrastructure development.
